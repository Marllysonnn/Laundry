<template>
  <div id="InputBox">
    <label :for="inputId">{{ label }}</label>
    <div>
      <input 
      :id="inputId" 
        :type="inputType" 
        :value="inputValue" 
        @input="updateValue($event.target.value)"
        :placeholder="placeholder" 
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  props: {
    label: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    }
  },
  computed: {
    inputId() {
      return this.label.toLowerCase().replace(/\s+/g, '-') + '-input';
    },
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
  font-weight: 400;
}
input {
  width: calc(100% - 1em);
  padding: 0.5em 0em 0.5em 2.2em;
  border: 0.02em solid #c0bfbf;
  border-radius: 0.5em;
}
</style>
