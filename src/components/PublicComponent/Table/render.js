export default {
    props: {
        render: {
            type: Function,
            default: () => {}
        },
        params: {
            type: Object,
            default: () => {}
        }
    },
    render(h) {
        return this.render(h, this.parmas)
    }
}