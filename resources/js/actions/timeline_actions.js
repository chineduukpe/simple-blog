const { LOAD_TIMELINE } = require("./action_types")

export const loadTimeline = () => {
    return {
        type: LOAD_TIMELINE,
    }
}