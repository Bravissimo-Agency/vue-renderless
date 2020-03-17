<template>
    <Select
        v-slot:default="{ isOpen, toggle, selectItem, activeItem }"
        v-model="active"
        :items="items"
    >
        <div class="select">
            <button
                id="exp_button"
                aria-haspopup="listbox"
                aria-labelledby="exp_elem exp_button"
                type="button"
                @click="toggle"
            >
                {{ activeItem.label }}
            </button>

            <ul
                v-show="isOpen"
                id="exp_elem_list"
                tabindex="-1"
                role="listbox"
                aria-labelledby="exp_elem"
                class="hidden"
            >
                <li
                    v-for="item in items"
                    :key="item.value"
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
