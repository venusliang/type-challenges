/*
  6 - 简单的 Vue 类型
  -------
  by Anthony Fu (@antfu) #困难 #this #application #vue
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现类似Vue的类型支持的简化版本。
  
  通过提供函数名称`SimpleVue`（类似于`Vue.extend`或`defineComponent`），它应该正确地推断出计算和方法内部的`this`类型。
  
  在此挑战中，我们假设SimpleVue接受带有`data`，`computed`和`methods`字段的Object作为唯一参数，
  
  -`data`是一个简单的函数，它返回一个公开上下文`this`的对象，但是您无法访问`data`中的数据本身或其他计算机值或方法。
  
  -`computed`是将上下文作为`this`的函数的对象，进行一些计算并返回结果。计算结果应作为简单的返回值而不是函数显示给上下文。
  
  -`methods`是函数的对象，其上下文也与`this`相同。方法可以访问`data`，`computed`以及其他`methods`公开的字段。 `computed`与`methods`的不同之处在于按原样公开的功能。
  
  `SimpleVue`的返回值类型可以是任意的。
  
  ```ts
  const instance = SimpleVue({
    data() {
      return {
        firstname: 'Type',
        lastname: 'Challenges',
        amount: 10,
      }
    },
    computed: {
      fullname() {
        return this.firstname + ' ' + this.lastname
      }
    },
    methods: {
      hi() {
        alert(this.fullname.toLowerCase())
      }
    }
  })
  ```
  
  > 在 Github 上查看：https://tsch.js.org/6/zh-CN
*/
import { Equal, Expect } from "@type-challenges/utils";

/* _____________ 你的代码 _____________ */

type Methods = {
  [key: string]: Function;
};

type ComputedFunc<T = any> = (...arg: any[]) => T;

type Computed<C> = C extends Record<string, ComputedFunc<any>>
  ? { [K in keyof C]: ReturnType<C[K]> }
  : never;

declare function SimpleVue<D, C, M extends Methods>(
  options: {
    data: () => D;
    computed: C;
    methods: M;
  } & ThisType<D & M & Computed<C>>
): any;

/* _____________ 测试用例 _____________ */

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname;
    // @ts-expect-error
    this.getRandom();
    // @ts-expect-error
    this.data();
    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10
    };
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    }
  },
  methods: {
    getRandom() {
      return Math.random();
    },
    hi() {
      alert(this.fullname.toLowerCase());
      alert(this.getRandom());
    },
    test() {
      const fullname = this.fullname;
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any;
    }
  }
});

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/6/answer/zh-CN
  > 查看解答：https://tsch.js.org/6/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
