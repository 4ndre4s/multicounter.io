<template>
    <v-card height="250">
        <v-card-title class="headline justify-center">
            <template v-if="!nameGettingChanged">
                {{nameModel}}
            </template>
            <template v-else>
                <v-text-field clearable label="Name" v-model="nameModel" style="max-width: 50%;"></v-text-field>
            </template>
            <v-icon :small="!nameGettingChanged" @click="nameGettingChanged = !nameGettingChanged" class="ml-2">
                {{nameGettingChanged ?
                "mdi-check-circle-outline" : "mdi-lead-pencil"}}
            </v-icon>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-text class="text-center display-1">
            {{countModel}}
        </v-card-text>

        <v-card-actions class="d-flex justify-center justify-sm-space-around">
            <v-btn color="primary" rounded x-large @click="countModel -= stepRange">
                -
            </v-btn>
            <v-btn color="secondary" x-small rounded @click="countModel = 0">
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-btn color="primary" rounded x-large @click="countModel += stepRange">
                +
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "CounterCard",
        props: {
            name: {
                required: true
            },
            count: {
                required: true
            }
        },
        data() {
            return {
                stepRange: 1,
                nameGettingChanged: false,
                nameModel: this.name,
                countModel: this.count
            }
        },
        watch: {
            nameModel() {
                this.$emit("name-changed", this.nameModel);
            },
            countModel() {
                this.$emit("count-changed", this.countModel);
            }
        }
    }
</script>

<style scoped>

</style>