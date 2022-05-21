import {COUNTER_DECREMENT, COUNTER_INCREMENT} from "../constants";

export function counterIncrement() {
    return { type: COUNTER_INCREMENT}
}

export function counterDecrement() {
    return { type: COUNTER_DECREMENT}
}