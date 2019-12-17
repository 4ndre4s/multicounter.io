<template>
    <div>
        <v-card height="250" :color="color">
            <v-card-title class="headline d-flex justify-space-around">
                <div>
                    <v-btn icon color="warning" @click="countModel = 0"
                           :dark="backgroundColorIsTooDark">
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                    <v-btn icon @click="overlayVisible = true" :dark="backgroundColorIsTooDark">
                        <v-icon>mdi-format-color-fill</v-icon>
                    </v-btn>
                </div>
                <div class="d-flex justify-center">
                    <template v-if="!nameGettingChanged">
                        <v-icon :dark="backgroundColorIsTooDark">{{nameModel}}</v-icon>
                    </template>
                    <template v-else>
                        <v-text-field v-model="nameModel"
                                      ref="name"
                                      :dark="backgroundColorIsTooDark"
                                      :autofocus="true"
                                      clearable label="Name"
                                      @keyup.enter="nameGettingChanged = false"
                                      @blur="nameGettingChanged = false"
                                      style="max-width: 50%;"></v-text-field>
                    </template>
                    <v-btn icon @click="nameGettingChanged = !nameGettingChanged" :dark="backgroundColorIsTooDark">
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
            <v-card-text class="text-center display-1" :class="{'white--text': backgroundColorIsTooDark}">
                {{countModel}}
            </v-card-text>
            <v-card-actions class="d-flex justify-center justify-sm-space-around">
                <v-btn fab color="primary" x-large @click="countModel -= stepRange" style="font-size: 200%">
                    -
                </v-btn>
                <v-btn fab color="primary" x-large @click="countModel += stepRange" style="font-size: 200%">
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
                setColor: null
            }
        },
        created() {
            this.$emit("color-changed", {color: this.color, id: this.identifier});
        },
        computed: {
            backgroundColorIsTooDark() {
                return this.color.charAt(1) <= 9;
            },
            color: {
                get() {
                    if (!this.setColor) {
                        return this.getRandomColor();
                    }
                    return this.setColor;
                },
                set(newValue) {
                    this.setColor = newValue;
                }
            }
        },
        methods: {
            getRandomColor() {
                return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
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