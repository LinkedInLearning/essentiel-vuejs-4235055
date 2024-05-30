<script></script>

<template>

    <div id="intro">
        <p>Bienvenue sur Pizza Deluxe !</p>
        <p>Offre du jour <br> PROMOTION sur la Pizza Royale</p>
    </div>

    <h1>Notre Carte</h1>
    <div id="product-menu">
        <Product />
    </div>
</template>


<style>
#intro {
    background-image: url(../assets/images/pizza-menu.jpg);
    background-position: bottom;
    background-size: cover;
    height: 300px;
    padding: 3%;
    width: 100%;
}
#intro p {
    color: white;
    font-size: 2em;
    font-weight: bold;
    text-shadow: black 0.1em 0.1em 0.2em;
}
#product-menu {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
}
section {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>