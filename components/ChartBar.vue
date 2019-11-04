<script>
    import {Bar, mixins} from "vue-chartjs";

    const {reactiveProp} = mixins;

    export default {
        name: "ChartBar",
        extends: Bar,
        mixins: [reactiveProp],
        props: ["chartData"],
        data() {
            return {
                //Chart.js options that controls the appearance of the chart
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted() {
            console.log(this.chartData);
            this.renderChart(this.chartData, this.options)
        },
    }
</script>

<style scoped>

</style>