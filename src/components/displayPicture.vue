<template>
    <v-main>
        <div class="picture_full_screen">
            <img :src="require('@/assets/' + picture + '.jpg')" alt="Picture couldn't be displayed">
        </div>
        <p class="display_picture_text">{{description}}</p>
    </v-main>
</template>

<script>
export default {

    props: {
        picture: {
            type: String,
        },
        description: {
            type: String,
        }
    }

}
</script>

<style>
.picture_full_screen {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.picture_full_screen img {
    width: 25%;
}

.display_picture_text {
    text-align: center;
    margin: 1% 0 1% 0
}
</style>