import { h } from 'vue';

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
    render() {
        return this.render(h, this.parmas)
    }
}