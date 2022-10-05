<template>
    <div class="main_personnal">
        <div v-if="isActive" @click="isActive = false">
            <DisplayPicture :picture="toZoomPicture" :description="toZoomDescription " />
        </div>
        <div v-else>
            <div class="button_choice">
                <span class="non_selected_choice">{{choices[n-1]}}</span>
                <v-icon class="icon" v-if="n>0" large @click="n--">mdi-arrow-left</v-icon>
                <span class="selected_choice"> {{choices[n]}} </span>
                <v-icon class="icon" v-if="n<choices.length-1" large @click="n++">mdi-arrow-right</v-icon>
                <span class="non_selected_choice">{{choices[n+1]}}</span>
            </div>
            <span>This part will be dedicated to me, personnally. You will be able to find what I like or do during
                my
                spare time, a small story about my life and some of my futur life projects !</span>
            <div>
                <div v-if="n==0">
                    <div class="description_organizer">
                        <div class="description_leftorright">
                            <p>I always wanted to try, but I lived in Limoges, central France, then Toulouse where the
                                only sea fastly accessible is the Mediteranean (Those who say they surf the Mediteranean
                                sea are lying, sorry but it is the truth) and then Paris. No need to explain why you
                                can't surf there. So arriving in Portugal, Lisbon, with 3 accessible beaches at maximum
                                25mn of driving, of course I wouldn't miss the opportunity ! Since I landed, some people
                                wonder if I moved in for surf, or to join my girlfriend... The question is still pending
                                for an answer !
                            </p>
                        </div>
                        <div class="description_center">
                            <p>As you probably understood from the different small pitches in my website, I do love to
                                travel. I have been able the last 3 years to discover a bit more than 15 European
                                countries and some places further. Some during long holidays, long stays or remote
                                office, as I am working remotely since a bit more than 2 years now, without any
                                efficiency problems of course, I always have been pretty trustworthy on my deliveries !
                                Traveling and discovering place became a big part of my life and I don't see myself
                                stopping now !
                            </p>
                        </div>
                        <div class="description_leftorright">
                            <p>I have always been a big fan of fantasy, in books, mangas, TV shows, movies or video
                                games, and
                                in most of my travel there is always a book on my bag. I could easily argue some hours
                                about why the end of Game of throne is not total sh** as people say, or that this same
                                book is not even the best fantasy book which exists, there is still much better out
                                there. </p>
                        </div>
                    </div>
                    <div class="picture_organizer">
                        <div>
                        </div>
                        <div @click="zoomPicture(travelPic, travelDescr)">
                            <img :src="require('@/assets/' + travelPic + '.jpg')">
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div v-if="n==1">
                    <div class="description_organizer">
                        <div class="description_leftorright">
                            <p>I was born a wonderful days, 14 of November (truth to be told, it was
                                probably raining. Always is), in the -huge- city of Limoges, France. Some french people
                                would
                                say there is nothing to do over there, but no worries, I got a pretty busy childhood
                                playing
                                a
                                lot of football. Yet, I still left this town to pursue my studies in Toulouse, the pink
                                city.
                                This first travel showed me very fast I needed to moce, to live in or atleast discover
                                new
                                places, which I did as soon as I could, leaving our country for a 6 months Erasmus in
                                Italy, in Pisa !
                                The first of a long series of travelling which allowed me to discover much of Europe.
                                But
                                not enough yet.
                            </p>
                        </div>
                        <div class="description_center">
                            <p>I actually live in Portugal, more precisely in Lisbon. Where the sun shines 300 days a
                                year, next to legendary surf spots where the bests often show up, a country where you
                                could
                                eat some of the best fishes of your life while sleeping on beaches you would not think
                                were
                                in Europe. </p>
                            <p>I moved here in early 2021 to change from Paris where I was at the time, to see something
                                new, have a different
                                kind
                                of life. And it worked.</p>
                            <p>Ah and also my girlfriend leaves there, that helped a bit to decide.</p>

                        </div>
                        <div class="description_leftorright">
                            <p>As you understood, I have been moving a bit during the last 3 years, and to
                                be honnest I do not plan to start. There is much in Europe I am still to see, and the
                                world is an even bigger playground, but the asiatic countries are gonna be the next
                                step, holidays awaits !</p>
                        </div>
                    </div>
                    <div class="picture_organizer">

                        <div @click="zoomPicture(pyreneesPic, pyreneesDescr)">
                            <img :src="require('@/assets/' + pyreneesPic + '.jpg')">
                        </div>
                        <div @click="zoomPicture(lisbonPic, lisbonDescr)">
                            <img :src="require('@/assets/' + lisbonPic + '.jpg')">
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div v-if="n==2">
                    <div class="description_organizer">
                        <div class="description_leftorright">
                            <p>Like most of the people in our field, I do love some good video games. I have been raised
                                with the french Dofus, looking for dragon eggs all over the world of the 12.
                                I also
                                fell, way too many hours, in the summoners rift fighting to destroy the enemi nexus (and
                                like eveeryone, loosing some of my mental health in there...).
                                I then had great team
                                experiences playing the very end game of Final Fantasy XIV, definitly one of the best
                                games to this day I have set foot on.
                                A lot of other games have consumed my life hours,
                                most of them always teaching skills, values or training logic, valuable for my activity.
                            </p>

                        </div>
                        <div class="description_center">
                            <p>My most recent discover and center of interest for sure is economy. The field which
                                litteraly drives the world, even if some persons don't believe in it. I chose to learn
                                about it when I realised than no one better than I was the best fit to take care of my
                                economies. Realisation which required to lean a bit about how it worked before risking
                                to loose your own money ! Still working on it, so please pray for me !</p>
                        </div>
                        <div class="description_leftorright">
                            <p>I've always been a big fan of books, more than movies or TV shows, but after some time
                                every things you read is getting its adaptation, so you gotta also see the black screen
                                work. Most of the time it is less good, but no one can make better than your own
                                imagination. Besides adaptions, there is still some huge piece of art, specially in the
                                japonese world to my opinion. But sadly less and less lately...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DisplayPicture from '@/components/displayPicture.vue';

export default {
    name: 'App',

    components: {
        DisplayPicture
    },

    data() {
        return {
            isActive: false,
            toZoomPicture: "",
            toZoomDescription: "",
            readingPic: "reading",
            readingDescr: "Reading Top Gun mode - Super stylish right ?",
            travelPic: "travel",
            travelDescr: "Some pretty good view once you're up there",
            surfPic: "surf",
            surfDescr: "Don't make fun, like isn't always easy when you're ginger",
            lisbonDescr: "And also its super cute and famous tramway, let's not forget",
            lisbonPic: "lisbon",
            pyreneesDescr: "But even though, the best place remains the Pyrenees...",
            pyreneesPic: "pyrenees",
            choices: ["What do I do", "About Me", "What interests me"],
            n: 1
        }
    },

    methods: {
        zoomPicture(picture, description) {
            this.isActive = true
            this.toZoomDescription = description
            this.toZoomPicture = picture
        }
    }
}
</script>

<style>
.main_personnal {
    height: 100%;
    text-align: center;
}

.button_choice {
    display: flex;
    justify-content: center;
    align-items: center;
}

.selected_choice {
    font-size: 30px;
    font-weight: bolder;
    color: #707070;
}

.icon {
    padding: 15px
}

.non_selected_choice {
    font-size: 25px;
    font-weight: bolder;
    color: #707070;
}

.description_organizer {
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.picture_organizer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.picture_organizer div {
    width: 33%
}

.life_timeline {
    display: flex;
    justify-content: center;
}

.description_leftorright {
    width: 33%;
    margin: 0 20px 0 20px;
}

.description_center {
    width: 33%;
}

img {
    width: 65%
}
</style>