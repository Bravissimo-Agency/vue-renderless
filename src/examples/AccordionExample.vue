<template>
    <Accordion
        v-slot:default="{ isOpen, toggle, slideDown, slideUp }"
    >
        <div class="accordion">
            <button
                class="toggle__header"
                type="button"
                @click="toggle"
            >
                <h3 class="toggle__heading">
                    Min rubrik
                </h3>

                <div class="toggle__triangle">
                    >
                </div>
            </button>

            <transition
                @enter="slideDown"
                @leave="slideUp"
            >
                <div
                    v-show="isOpen"
                    class="toggle__contentHolder"
                    style="display: none"
                >
                    <div class="toggle__content content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint dolores commodi laudantium ducimus. Eum quaerat molestiae at, odit architecto perspiciatis cumque impedit vitae quas iste, explicabo, sed dolores aliquam minima.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint dolores commodi laudantium ducimus. Eum quaerat molestiae at, odit architecto perspiciatis cumque impedit vitae quas iste, explicabo, sed dolores aliquam minima.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint dolores commodi laudantium ducimus. Eum quaerat molestiae at, odit architecto perspiciatis cumque impedit vitae quas iste, explicabo, sed dolores aliquam minima.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint dolores commodi laudantium ducimus. Eum quaerat molestiae at, odit architecto perspiciatis cumque impedit vitae quas iste, explicabo, sed dolores aliquam minima.
                        </p>
                    </div>
                </div>
            </transition>
        </div>
    </Accordion>
</template>

<script>
import Accordion from '@/components/accordion/Accordion';

export default {
    components: {
        Accordion
    }
};
</script>

<style lang="postcss" scoped>
:root {
  --slowTrans: 0.35s;
}

.toggle__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d5dfe3;
  padding: 21px 0;
  width: 100%;
  text-align: left;
  cursor: pointer;
  @media (--tablet) {
    padding: 16px 0;
  }
  @media (--mobile) {
    padding: 11px 0;
  }
}

.toggle__heading {
  width: calc(100% - 50px);
  transition: var(--normalTrans);
  @media (--mobile) {
    font-size: 18px;
    width: calc(100% - 40px);
  }
}

.toggle__triangle {
  width: 17px;
  height: 15px;
  color: var(--primaryColor);
  transform: rotate(0.25turn);
  transition: var(--slowTrans);
  @media (--mobile) {
    width: calc(17px * 0.85);
    height: calc(15px * 0.85);
  }
}

.toggle__triangle svg {
  width: 100%;
  height: 100%;
}

.toggle__contentHolder {
  overflow: hidden;
}

.toggle__content {
  padding: 35px 0 35px;
  border-bottom: 1px solid #d5dfe3;
  @media (--tablet) {
    padding: 25px 0;
  }
}

.toggle.isOpen .toggle__triangle {
  transform: rotate(0.75turn);
}

.toggle__header:hover .toggle__heading,
.toggle.isOpen .toggle__heading {
  color: var(--primaryColor);
}
</style>
