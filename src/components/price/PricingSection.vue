<template>
  <div class="pricing">
    <dl class="info">
      <div :style="{ color: msrp > 0 ? 'green' : 'red' }">
        <dt>msrp:</dt>
        <dd>{{ msrp }}</dd>
      </div>
      <div :style="{ color: chapmanPrice > 0 ? 'green' : 'red' }">
        <dt>chapmanPrice:</dt>
        <dd>{{ chapmanPrice }}</dd>
      </div>
      <div :style="{ color: myChapmanDiscount > 0 ? 'green' : 'red' }">
        <dt>myChapmanDiscount:</dt>
        <dd>{{ myChapmanDiscount }}</dd>
      </div>
      <div :style="{ color: type === 'new' ? 'green' : 'red' }">
        <dt>type:</dt>
        <dd>{{ type }}</dd>
      </div>
      <div :style="{ color: isMsrpRequired ? 'green' : 'red' }">
        <dt>isMsrpRequired:</dt>
        <dd>{{ isMsrpRequired }}</dd>
      </div>
      <div :style="{ color: isAuthenticated ? 'green' : 'red' }">
        <dt>isAuthenticated:</dt>
        <dd>{{ isAuthenticated }}</dd>
      </div>
      <div>
        <dt>discounts:</dt>
        <dd>{{ discounts }}</dd>
      </div>
      <div>
        <dt>rebates:</dt>
        <dd>{{ rebates }}</dd>
      </div>
    </dl>

    <span class="label">
      <img
        v-if="price.showMyChapmanLogo"
        :src="require(`../../assets/img/mychapman-logo.svg`)"
        alt="My Chapman logo"
        loading="lazy"
        width="150"
        height="24"
      />
      {{ price.label }}
    </span>

    <span class="price">
      {{ price.amount > 0 ? formatPrice(price.amount) : "Call" }}
    </span>

    <span v-if="showSavings" class="savings">
      {{ type === "new" ? "MSRP" : "Retail" }}
      {{ formatPrice(props.msrp) }} - Savings
      {{ formatPrice(props.msrp - price.amount) }}
    </span>

    <button @click="openBreakout">Show Breakout</button>

    <transition name="fade">
      <span class="sticker" v-if="showSticker">SetTimeout + Transition Test</span>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { formatPrice } from "../../helpers";

const props = defineProps({
  msrp: {
    type: Number,
    required: true,
  },
  chapmanPrice: {
    type: Number,
    required: true,
  },
  myChapmanDiscount: {
    type: Number,
    required: true,
  },
  discounts: {
    type: Object,
    required: true,
  },
  rebates: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  vin: {
    type: String,
    required: true,
  },
  // Props used for testing
  isMsrpRequired: {
    type: Boolean,
    required: true,
  },
  isAuthenticated: {
    type: Boolean,
    required: true,
  },
});

/*
      Emits
*/
const emits = defineEmits(["show-pricing-breakout"]);
const openBreakout = () => {
  emits("show-pricing-breakout", true);
};

/*
      Price display
*/
const price = computed(() => {
  // MSRP required for site compliancy
  if (props.type === "new" && props.isMsrpRequired && !props.isAuthenticated) {
    if (props.msrp > 0) {
      return {
        label: "MSRP",
        amount: props.msrp,
        showMyChapmanLogo: false,
      };
    } else {
      return {
        label: "",
        amount: 0,
        showMyChapmanLogo: false,
      };
    }
  }
  // MyChapman discount
  else if (
    props.isAuthenticated &&
    props.myChapmanDiscount > 0 &&
    props.chapmanPrice > 0 &&
    props.chapmanPrice > props.myChapmanDiscount &&
    props.chapmanPrice - props.myChapmanDiscount > 0
  ) {
    return {
      label: "Price",
      amount: props.chapmanPrice - props.myChapmanDiscount,
      showMyChapmanLogo: true,
    };
  }
  // Chapman price
  else if (
    props.chapmanPrice > 0 &&
    (props.chapmanPrice < props.msrp || props.msrp <= 0)
  ) {
    return {
      label: "Chapman Price",
      amount: props.chapmanPrice,
      showMyChapmanLogo: false,
    };
  }
  // MSRP
  else if (props.msrp > 0) {
    return { label: "MSRP", amount: props.msrp, showMyChapmanLogo: false };
  }
  // No valid price to show
  else {
    return { label: "", amount: 0, showMyChapmanLogo: false };
  }
});

/*
      Savings
*/
const showSavings = computed(() => {
  return (
    props.chapmanPrice > 0 &&
    props.msrp - props.chapmanPrice > 0 &&
    (props.type !== "new" || !props.isMsrpRequired || props.isAuthenticated)
  );
});

let showSticker = ref(false);

setTimeout(() => {
  showSticker.value = true;
  console.log("hello");
}, 3000);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pricing {
  font-size: 100%;
  background: rgb(228, 255, 231);
  display: inline-block;
  width: 20rem;
  padding: 0 0.25rem;
}
.label {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
}
.label img {
  margin-right: 6px;
}
.price {
  display: block;
}
.info {
  margin: 0;
  text-align: left;
}
.info div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info dt {
  opacity: 0.6;
}
.info dd {
  opacity: 0.8;
}
.pricing div {
  height: 2rem;
}
button {
  width: 100%;
  height: 2rem;
}
.price {
  color: green;
  font-size: 200%;
}
.savings {
  opacity: 0.6;
}
.sticker {
  padding: 1rem;
  border: 10px solid lightskyblue;
  display: inline-block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
