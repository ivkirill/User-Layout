<template>
  <div class="panel">
    <div class="panel-heading">{{ header }} <slot name="toolbar"></slot></div>
    <div class="panel-body">
      <slot></slot>
    </div>
    <div class="panel-footer">{{ footer }}</div>
  </div>
</template>

<script>
  export default {
    name: 'block-panel',
    props: {
      header: {
        type: String,
        required: true
      },
      footer: {
        type: String
      }
    }
  }
</script>

<style>
  .panel-footer:empty {
    display: none;
  }

  .panel-heading {
    border-radius: 5px 5px 0 0;
    padding: 10px;
    background-color: #41b883;
    color: #fff;
    font-size: 17px;
  }

  .panel-body {
    padding: 10px;
    border: 1px solid #41b883;
  }

  .toolbar {
    float: right;    
  }
</style>