<template>
  <div class="mainBlock">
    <div class="title">Visual cooler emulation</div>
    <div class="cooler">
      <div class="coolerRotator">
        <div class="holes">
          <div class="hole">+</div>
          <div class="hole">+</div>
          <div class="hole">+</div>
          <div class="hole">+</div>
        </div>
        <div class="rotator" :class="mode"></div>
      </div>
      <div class="coolerControl">
        <button
          class="offButton"
          :class="isActive == 0 ? 'active' : ''"
          @click="stop"
        >
          0
        </button>
        <button
          class="speed1Button"
          :class="isActive == 1 ? 'active' : ''"
          @click="speed1"
        >
          1
        </button>
        <button
          class="speed2Button"
          :class="isActive == 2 ? 'active' : ''"
          @click="speed2"
        >
          2
        </button>
        <button
          class="speed3Button"
          :class="isActive == 3 ? 'active' : ''"
          @click="speed3"
        >
          3
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "",
      isActive: "0",
    };
  },

  methods: {
    stop() {
      this.mode = "stop";
      this.isActive = "0";
    },

    speed1() {
      this.mode = "speed1";
      this.isActive = "1";
    },

    speed2() {
      this.mode = "speed2";
      this.isActive = "2";
    },

    speed3() {
      this.mode = "speed3";
      this.isActive = "3";
    },
  },
};
</script>

<style lang="scss">
.title {
  margin: 30px auto;
  padding: 5px;
  width: 50%;
  font-family: sans-serif;
  font-size: 50px;
  font-weight: bold;
  background: linear-gradient(to right, rgb(94, 240, 94), rgb(82, 70, 248));
  background-clip: text;
  color: transparent;
}

.cooler {
  width: max-content;
  margin: 50px auto;
  padding: 10px;
  font-size: 50px;

  .coolerRotator {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    margin: 0 auto;
    border-radius: 50px;
    background: #222;

    .holes {
      position: absolute;
      display: grid;
      padding: 10px;
      grid-template: 1fr 1fr / 1fr 1fr;
      gap: 150px;
      background: transparent;
      border-radius: 30px;

      .hole {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #444;
        font-size: 20px;
        color: black;
      }
    }

    .rotator {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 200px;
      border: 1px solid #00ff00;
      border-radius: 50%;
      background: url("./assets/fan3.png") center center / cover;
    }
  }

  .coolerControl {
    box-sizing: border-box;
    display: flex;
    margin: 50px auto;

    .offButton {
      background: #333;
    }

    .speed1Button {
      background: #444;
    }

    .speed2Button {
      background: #555;
    }

    .speed3Button {
      background: #666;
    }

    button {
      margin: 10px;
      width: 50px;
      border: none;
      border-radius: 25px;
      font-size: 30px;
      color: rgb(0, 0, 0);
      transition: transform 100ms ease;
    }

    button:hover {
      transform: scale(0.95);
      color: #00ff00;
      box-shadow: 0px 0px 3px 3px #00ff00;
    }
  }
}

.stop {
  animation: stop 3s ease-out;
  animation-fill-mode: both;
}

.speed1 {
  animation: speed1 1s linear infinite;
  animation-fill-mode: both;
}

.speed2 {
  animation: speed2 1s linear infinite;
  animation-fill-mode: both;
}

.speed3 {
  animation: speed3 1s linear infinite;
  animation-fill-mode: both;
}

.active {
  color: #00ff00 !important;
  box-shadow: 0px 0px 3px 3px #00ff00;
}

@keyframes stop {
  0% {
    transform: rotateZ(0);
  }

  100% {
    transform: rotateZ(1turn);
  }
}

@keyframes speed1 {
  0% {
    transform: rotateZ(0turn);
  }

  100% {
    transform: rotateZ(2turn);
  }
}

@keyframes speed2 {
  0% {
    transform: rotateZ(0turn);
  }

  100% {
    transform: rotateZ(3turn);
  }
}

@keyframes speed3 {
  0% {
    transform: rotateZ(0turn);
  }

  100% {
    transform: rotateZ(4turn);
  }
}
</style>
