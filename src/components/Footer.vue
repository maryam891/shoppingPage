<template>
<div id="footer">
    <ul>
        <li>
          <RouterLink to="/" style="color: rgb(236, 245, 254); font-size: 20px">Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/Beauty" style="color: rgb(236, 245, 254); font-size: 20px;">Beauty & accessories
          </RouterLink>
        </li>
     </ul>
     <h1 style="color: rgb(236, 245, 254); margin-right: 10px;">DailyShopping
     </h1>
</div>
</template>

<style scoped>
  #footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(208, 154, 199, 0.644);
    height: 120px;
    width: 100%;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.153);
}
</style>
