<template>
    <v-container>
        <v-row>
            <v-col v-for="(counterCard, index) of counterCards"
                   :key="counterCard.id"
                   :cols="12"
                   :lg="3"
                   :md="4"
                   :sm="6"
                   :xs="8">
                <counter-card :name="counterCard.name" :count="counterCard.count" :identifier="counterCard.id"
                              @remove-card="removeCard"
                              @color-changed="changeColor"
                              @count-changed="(count) => counterCards[index].count = count"
                              @name-changed="(name) => counterCards[index].name = name">
                </counter-card>
            </v-col>
            <v-col :cols="12"
                   :lg="3"
                   :md="4"
                   :sm="6"
                   :xs="8">
                <add-new-counter-card @click.native="addCounterCard"></add-new-counter-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <chart-bar :chartData="dataCollection"></chart-bar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import CounterCard from "../components/CounterCard";
    import AddNewCounterCard from "../components/AddNewCounterCard";
    import ChartBar from "../components/ChartBar";

    export default {
        components: {
            CounterCard,
            AddNewCounterCard,
            ChartBar
        },
        data() {
            return {
                counterCards: [],
                counterNumber: 1

            }
        },
        created() {
            this.addCounterCard();
        },
        computed: {
            labels() {
                if (!this.counterCards) {
                    return [];
                }
                return this.counterCards.map(({name}) => name);
            },
            counts() {
                if (!this.counterCards) {
                    return [];
                }
                return this.counterCards.map(({count}) => count);
            },
            colors() {
                if(!this.counterCards) {
                    return [];
                }
                return this.counterCards.map(({color}) => color);
            },
            dataCollection() {
                return {
                    //Data to be represented on x-axis
                    labels: this.labels,
                    datasets: [{
                        label: 'Count',
                        backgroundColor: this.colors,
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: '#e6fffd',
                        //Data to be represented on y-axis
                        data: this.counts
                    }]
                }
            }
        },
        methods: {
            addCounterCard() {
                this.counterCards.push({
                    name: "Counter #" + (this.getAndIncrementCounterNumber()),
                    count: 0,
                    color: '#e6fffd',
                    id: Date.now()
                });
            },
            changeColor($event) {
                this.counterCards.forEach((item, index) => {
                    if (item.id === $event.id) {
                        this.counterCards[index].color = $event.color;
                    }
                });
            },
            getAndIncrementCounterNumber() {
                return this.counterNumber++;
            },
            removeCard({identifier}) {
                this.counterCards = this.counterCards.filter(item => item.id !== identifier);
            }
        },
        watch: {
            counterCards() {
                if (this.counterCards.length === 0) {
                    this.counterNumber = 1;
                }
            }
        }
    }
</script>
