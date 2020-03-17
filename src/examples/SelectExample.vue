<template>
    <Select
        id="my-select"
        v-slot:default="{ isOpen, toggle, selectItem, activeItem, buttonId, listId }"
        v-model="active"
        :items="items"
    >
        <div class="select">
            <button
                :id="buttonId"
                :aria-labelledby="buttonId"
                :aria-expanded="isOpen.toString()"
                aria-haspopup="listbox"
                type="button"
                @click="toggle"
            >
                {{ activeItem.label }}
            </button>

            <ul
                v-show="isOpen"
                :id="listId"
                :aria-labelledby="buttonId"
                tabindex="-1"
                role="listbox"
                class="hidden"
            >
                <li
                    v-for="item in items"
                    :key="item.value"
                    :aria-selected="item === activeItem"
                    role="options"
                    @click="selectItem(item)"
                >
                    {{ item.label }}
                </li>
            </ul>
        </div>
    </Select>
</template>

<script>
import Select from '@/components/select/Select';

export default {
    components: {
        Select
    },

    data: () => ({
        active: null,
        items: [
            {
                label: 'Choose item',
                value: null
            },
            {
                label: 'Lorem',
                value: 'lorem'
            },
            {
                label: 'Item 1',
                value: 1
            },
            {
                label: 'Item 2',
                value: 2
            },
            {
                label: 'Item 3',
                value: 3
            },
            {
                label: 'Item 4',
                value: 4
            },
            {
                label: 'Item 5',
                value: 5
            }
        ]
    })
};
</script>

<style>
</style>
