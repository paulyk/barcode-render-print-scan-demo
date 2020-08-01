import { get_binding_group_value } from "svelte/internal"

export const data = [
  {
    "id": 3127716,
    "name": "carrot cake"
  },
  {
    "id": 2759072,
    "name": "brownie"
  },
  {
    "id": 8464716,
    "name": "apple pie"
  },
  {
    "id": 9828318,
    "name": "ice cream"
  },
  {
    "id": 4403287,
    "name": "keylime pie"
  },
  {
    "id": 9244124,
    "name": "cusscuss"
  },
  {
    "id": 1983792,
    "name": "strawberry jam"
  },
  {
    "id": 305903,
    "name": "peanut butter cookies"
  }
]


function genId() {
  return randomNumber(1000000, 9999999)
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (min - max + 1)) + min
}