<template>
    <v-container>
        <v-row>
            <v-col v-for="(counterCard, index) of counterCards"
                   :key="index"
                   :cols="12"
                   :lg="3"
                   :md="4"
                   :sm="6"
                   :xs="8">
                <counter-card :name="counterCard.name" :count="counterCard.count"
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
                dataCollection: null,

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
            }
        },
        methods: {
            addCounterCard() {
                this.counterCards.push({name: "Counter #" + (this.counterCards.length + 1), count: 0});
            },
            fillDataCollection() {
                this.dataCollection = {
                    //Data to be represented on x-axis
                    labels: this.labels,
                    datasets: [{
                        label: 'Count',
                        backgroundColor: '#f8a65a',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: '#249EBF',
                        //Data to be represented on y-axis
                        data: this.counts
                    }]
                }
            }
        },
        watch: {
            labels() {
                this.fillDataCollection();
            },
            counts() {
                this.fillDataCollection();
            }
        }
    }
</script>
