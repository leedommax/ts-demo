import { Vue, Component } from 'vue-property-decorator'
declare module 'vue/types/vue' {
  interface Vue {
    mixinValue: string
  }
}
@Component({})
export default class TransferPage extends Vue {
  mixinValue = 'mixinValue'
}
