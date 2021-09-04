import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        name: 'Two Sliders /w Fries',
        price: '12.99',
        section: 'combos',
        details: 'Served with Slaw, Pickles and Twins Sauce'
    },
    {
        id: 2,
        name: 'One Slider & One Tender /w Fries',
        price: '11.99',
        section: 'combos',
        details: 'Slider with Slaw, Pickles and Twins Sauce. Tender with Sliced Bread, Pickles and a Side of Twinz Sauce'
    },
    {
        id: 3,
        name: 'Two Tenders /w Fries',
        price: '10.99',
        section: 'combos',
        details: 'Served with Sliced Bread, Pickles and a Side of Twinz Sauce'
    },
    {
        id: 4,
        name: 'Mac & Cheese',
        price: '4.50',
        section: 'sides',
        details: ''
    },
    {
        id: 5,
        name: 'Slaw',
        price: '3.50',
        section: 'sides',
        details: ''
    },
    {
        id: 6,
        name: 'Single Slider',
        price: '5.50',
        section: 'sides',
        details: ''
    },
    {
        id: 7,
        name: 'Single Tender',
        price: '3.50',
        section: 'sides',
        details: ''
    },
    {
        id: 8,
        name: 'Fountain Drink',
        price: '2.25',
        section: 'drinks',
        details: ''
    },
    {
        id: 9,
        name: 'Bottled Water',
        price: '1.50',
        section: 'drinks',
        details: ''
    },
    {
        id: 10,
        name: 'Twinz Sauce',
        price: '0.75',
        section: 'extras',
        details: ''
    },
    {
        id: 11,
        name: 'Ranch',
        price: '0.75',
        section: 'extras',
        details: ''
    },
];

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addOne(state, action) {
            const { payload } = action;
            state.push(payload);
        }
    }
});

export const { addOne } = menuSlice.actions;

export default menuSlice.reducer;