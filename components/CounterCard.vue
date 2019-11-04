<template>
    <div>
        <v-card height="250">
            <v-card-title class="headline d-flex justify-space-around">
                <div>
                    <v-btn icon color="warning" @click="countModel = 0">
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                    <v-btn icon @click="overlayVisible = true">
                        <v-icon>mdi-format-color-fill</v-icon>
                    </v-btn>
                </div>
                <div class="d-flex justify-center">
                    <template v-if="!nameGettingChanged">
                        {{nameModel}}
                    </template>
                    <template v-else>
                        <v-text-field v-model="nameModel"
                                      ref="name"
                                      :autofocus="true"
                                      clearable label="Name"
                                      @keyup.enter="nameGettingChanged = false"
                                      @blur="nameGettingChanged = false"
                                      style="max-width: 50%;"></v-text-field>
                    </template>
                    <v-btn icon @click="nameGettingChanged = !nameGettingChanged">
                        <v-icon :small="!nameGettingChanged">
                            {{nameGettingChanged ?
                            "mdi-check-circle-outline" : "mdi-lead-pencil"}}
                        </v-icon>
                    </v-btn>
                </div>
                <v-btn icon color="error" rounded @click="() => this.$emit('remove-card', {identifier})">
                    <v-icon>mdi-close-circle-outline</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="text-center display-1">
                {{countModel}}
            </v-card-text>
            <v-card-actions class="d-flex justify-center justify-sm-space-around">
                <v-btn fab :color="color" x-large @click="countModel -= stepRange" style="font-size: 200%">
                    -
                </v-btn>
                <v-btn fab :color="color" x-large @click="countModel += stepRange" style="font-size: 200%">
                    +
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-overlay :value="overlayVisible">
            <v-color-picker v-model="color" mode="hexa" ref="colorPicker" @click.self=""></v-color-picker>
            <v-btn raised color="primary mt-2 mr-n4" @click="overlayVisible = false" :right="true" :absolute="true">
                Close
            </v-btn>
        </v-overlay>
    </div>
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
            },
            identifier: {
                required: true
            }
        },
        data() {
            return {
                stepRange: 1,
                nameGettingChanged: false,
                nameModel: this.name,
                countModel: this.count,
                overlayVisible: false,
                color: "#f8a65a"
            }
        },
        watch: {
            nameModel() {
                this.$emit("name-changed", this.nameModel);
            },
            countModel() {
                this.$emit("count-changed", this.countModel);
            },
            color() {
                this.$emit("color-changed", {color: this.color, id: this.identifier});
            },
            overlayVisible() {
                if (!!this.overlayVisible) {
                    this.$nextTick(() => {
                        this.$refs.colorPicker.$el.focus();
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>