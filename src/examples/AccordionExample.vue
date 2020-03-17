<template>
    <Accordion
        id="test"
        v-slot:default="{ isOpen, toggle, headerId, bodyId }"
    >
        <div
            :class="{ 'isOpen': isOpen }"
            class="accordion"
        >
            <AccordionHeader
                :id="headerId"
                :is-open="isOpen"
                :aria-controls="bodyId"
                @click="toggle"
            >
                <h3 class="accordion__heading">
                    Min rubrik
                </h3>

                <div class="accordion__triangle">
                    >
                </div>
            </AccordionHeader>

            <AccordionBody
                :id="bodyId"
                :aria-labelledby="headerId"
                :is-open="isOpen"
            >
                <div class="accordion__content content">
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
            </AccordionBody>
        </div>
    </Accordion>
</template>

<script>
import Accordion from '@/components/accordion/Accordion';
import AccordionHeader from '@/components/accordion/AccordionHeader';
import AccordionBody from '@/components/accordion/AccordionBody';

export default {
    components: {
        Accordion,
        AccordionHeader,
        AccordionBody
    }
};
</script>

<style lang="postcss" scoped>
.accordion {
    --slowTrans: 0.35s;
    --primaryColor: orange;
}

.accordionHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d5dfe3;
    padding: 21px 0;
    width: 100%;
    text-align: left;
    cursor: pointer;
}

.accordion__heading {
    width: calc(100% - 50px);
    transition: var(--normalTrans);
}

.accordion__triangle {
    width: 17px;
    height: 15px;
    color: var(--primaryColor);
    transform: rotate(0.25turn);
    transition: var(--slowTrans);
}

.accordion__triangle svg {
    width: 100%;
    height: 100%;
}

.accordion__content {
    padding: 35px 0 35px;
    border-bottom: 1px solid #d5dfe3;
}

.accordion.isOpen .accordion__triangle {
    transform: rotate(0.75turn);
}

.accordion__header:hover .accordion__heading,
.accordion.isOpen .accordion__heading {
    color: var(--primaryColor);
}
</style>
