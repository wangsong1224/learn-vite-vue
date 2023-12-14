/**
 * https://juejin.cn/post/7273756059494662179 这个专栏很好
*/
var designPrinciples = {
  'SOLID': {
    'SRP 单一职责原则': {
      /**
       * Single Responsibility Principle
       * 一个类或者模块只负责完成一个职责（或者功能）。
       * 
       * 评价一个类是否单一,并没有非常明确可量化的标准,可以说是非常主观的事儿
       * 有几个判断标准
       * 1.类中代码行数过多,函数属性过多 影响可读性和可维护性
       * 2.类依赖的其他类过多,或者被依赖的过多
       * 3.类中大量的方法都是集中操作某几个属性
       * 4.类比较难起名字,很难用一个业务名词概括
       * 
       * 随着业务的发展,原来符合的可能不符合
       * 比如原来User表里面有地址,但是后来地址单独维护了,可以新建一个表
       * 这就是持续重构
       * 
       */
    },
    'OCP 开闭原则': {
      /**
       * Open Closed Principle
       * 对扩展开放,对修改关闭
       * 扩展性是代码质量最重要的衡量标准之一,大部分设计模式都是为了解决代码扩展性而存在的
       * 比如工厂模式 代理模式 装饰器模式
       * 添加一个新的功能应该是，在已有代码基础上扩展代码（新增模块、类、方法等），而非修改已有代码（修改模块、类、方法等）。
       * 
       * 
       */
    },
    'LSP 里氏替换原则': {
      /**
       * Liskov Substitution Principle
       * 子类对象（object of subtype/derived class）能够替换程序（program）中父类对象
       * （object of base/parent class）出现的任何地方，并且保证原来程序的逻辑行为（behavior）不变及正确性不被破坏。
       * 
       * 理解里式替换原则，最核心的就是理解“design by contract，按照协议来设计”这几个字。
       * 父类定义了函数的“约定”（或者叫协议），那子类可以改变函数的内部实现逻辑，但不能改变函数原有的“约定”。
       * 这里的约定包括：函数声明要实现的功能；对输入、输出、异常的约定；甚至包括注释中所罗列的任何特殊说明。
       * 用来指导继承关系中子类该如何设计，子类的设计要保证在替换父类的时候，不改变原有程序的逻辑及不破坏原有程序的正确性。
       */
    },
    'ISP 接口隔离原则': {
      /**
       * Interface Segregation Principle
       * 客户端不应该被强迫依赖它不需要的接口。其中的“客户端”，可以理解为接口的调用者或者使用者。
       * 在设计微服务或者类库接口的时候，如果部分接口只被部分调用者使用，那我们就需要将这部分接口隔离出来，
       * 单独给对应的调用者使用，而不是强迫其他调用者也依赖这部分不会被用到的接口。
       * 
       * 单一职责原则针对的是模块、类、接口的设计。
       * 而接口隔离原则相对于单一职责原则，一方面它更侧重于接口的设计，另一方面它的思考的角度不同。
       * 它提供了一种判断接口是否职责单一的标准：通过调用者如何使用接口来间接地判定。
       * 如果调用者只使用部分接口或接口的部分功能，那接口的设计就不够职责单一。
       */
    },
    'DIP 依赖反转原则': {
      /**
       * Dependency Inversion Principle
       * 高层模块（high-level modules）不要依赖低层模块（low-level）。
       * 高层模块和低层模块应该通过抽象（abstractions）来互相依赖。
       * 除此之外，抽象（abstractions）不要依赖具体实现细节（details），具体实现细节（details）依赖抽象（abstractions）。
       * 一般用来指导框架的设计
       */
    },
  },
  'KISS 尽量保持简单': {
    /**
     * Keep It Simple and Stupid.
     * 尽量保持简单
     * 是保持代码可读性和可维护性的重要手段
     * 结构清晰,命名规范 尽量让别人一眼看懂
     * 1.不要使用同事可能不懂的技术来实现代码；
     * 2.不要重复造轮子，要善于使用已经有的工具类库；
     * 3.不要过度优化。
     */
  },
  'YAGNI 你不会需要它': {
    /**
     * You Ain’t Gonna Need It
     * 不要去设计当前用不到的功能；不要去编写当前用不到的代码。实际上，这条原则的核心思想就是：不要做过度设计。
     * 比如提前安装很多还用不到的依赖包
     * 
     */
  },
  'DRY 不要写重复的代码': {
    /**
     * Don’t Repeat Yourself
     * 尽管复用、可复用性、DRY 原则这三者从理解上有所区别，但实际上要达到的目的都是类似的，
     * 都是为了减少代码量，提高代码的可读性、可维护性。除此之外，复用已经经过测试的老代码，bug 会比从零重新开发要少。
     * 
     * 怎么写出高可复用的代码
     * 1.减少耦合代码
     * 对于高度耦合的代码，当我们希望复用其中的一个功能，想把这个功能的代码抽取出来成为一个独立的模块、类或者函数的时候，
     * 往往会发现牵一发而动全身。移动一点代码，就要牵连到很多其他相关的代码。
     * 所以，高度耦合的代码会影响到代码的复用性，我们要尽量减少代码耦合。
     * 2.满足单一职责原则
     * 如果职责不够单一，模块、类设计得大而全，那依赖它的代码或者它依赖的代码就会比较多，进而增加了代码的耦合。
     * 根据上一点，也就会影响到代码的复用性。相反，越细粒度的代码，代码的通用性会越好，越容易被复用。
     * 3.模块化
     * 这里的“模块”，不单单指一组类构成的模块，还可以理解为单个类、函数。我们要善于将功能独立的代码，封装成模块。
     * 独立的模块就像一块一块的积木，更加容易复用，可以直接拿来搭建更加复杂的系统。
     * 4.业务与非业务逻辑分离
     * 越是跟业务无关的代码越是容易复用，越是针对特定业务的代码越难复用。
     * 所以，为了复用跟业务无关的代码，我们将业务和非业务逻辑代码分离，抽取成一些通用的框架、类库、组件等。
     * 5.通用代码下沉
     * 我们只允许上层代码调用下层代码及同层代码之间的调用，杜绝下层代码调用上层代码。所以，通用的代码我们尽量下沉到更下层。
     * 6.应用模板等设计模式
     * 模板模式利用了多态来实现，可以灵活地替换其中的部分代码，整个流程模板代码可复用
     */
  },
  'LOD 迪米特法则': {
    /**
     * Law of Demeter
     * 最小知识原则
     * 不该有直接依赖关系的类之间，不要有依赖；
     * 有依赖关系的类之间，尽量只依赖必要的接口（也就是定义中的“有限知识”）。
     * 
     * 高内聚,松耦合
     * “高内聚”用来指导类本身的设计，“松耦合”用来指导类与类之间依赖关系的设计。
     * 
     */
  },
}
var designModel = {
  '创建型': {
    '单例模式': {
      /*
      
      用处:表示全局唯一类,例如vuex,涉及多文件同时修改状态,读取状态 可能会有冲突
      不要在文件里直接修改,而是用mutations,actions等  功能模块划分清晰
      */
      /**
       * 定义:一个类只能创建一个实例,这个类就是单例类
       * 1.全局状态管理
       * 单例模式可以用于创建全局状态管理类，以确保应用程序中的状态是唯一的，并且可以在不同的组件或模块之间共享。
       * 2.应用程序配置信息
       * 3.对话框或模态框
       * 单例模式可以用于创建对话框或模态框的实例，以确保只有一个弹出窗口在屏幕上显示，并避免重复创建多个实例。
       * 4.日志记录器
       * 单例模式可以用于创建一个日志记录器，以便在整个应用程序中进行日志记录，并提供统一的接口来记录和处理日志信息。
       * 5.缓存管理器
       * 单例模式可以用于创建一个缓存管理器，用于缓存数据、资源或计算结果，以提高应用程序的性能和效率。
       * 6.资源池或连接池
       * 单例模式可用于创建资源池或连接池，例如数据库连接池、线程池等，以确保资源的有效管理和共享。
       * 
       */
      getSingle() {
        class SingleDog {
          static hasInstance() {
            // 如果没有就创建
            if (!SingleDog.instance) {
              return new SingleDog()
            } else {
              // 如果有就返回实例
              SingleDog.instance = new SingleDog()
            }
          }
        }
      },
    },
    '工厂模式': {
      /**
       * 提供了将[对象]的实例化过程封装在[工厂类]中的方式
       * 通过使用工厂模式,将对象的创建和使用代码分离,提供统一的接口来创建不同类型的对象
       * 用于解决在创建对象时所涉及的复杂性和依赖关系
       *  
       * 当创建逻辑比较复杂,是个大工程的时候,我们考虑用工厂模式,封装对象的创建过程,将对象的创建和使用分离
       * 1.类似规则解析,要动态的根据不同类型创建不同的对象
       * 2.尽管我们不需要根据不同的类型创建不同的对象，但是，单个对象本身的创建过程比较复杂，
       * 比如前面提到的要组合其他类对象，做各种初始化操作。
       * 在这种情况下，我们也可以考虑使用工厂模式，将对象的创建过程封装到工厂类中。
       * 
       * 1.UI组件库
       * 在开发UI组件库时，可以使用工厂模式来创建不同类型的组件实例。
       * 不同的弹框,有一个统一的create方法
       * 比如，一个按钮组件工厂可以根据传入的参数（如按钮类型、大小等）创建相应的按钮实例。
       * 2.文件格式转换器
       * 在处理文件格式转换时，可以使用工厂模式来创建不同类型的转换器。
       * 例如，可以根据文件类型的不同，使用不同的转换器工厂来创建PDF转换器、图像转换器或音频转换器。
       * 3.游戏角色创建器
       * 在游戏开发中，可以使用工厂模式来创建不同类型的游戏角色。
       * 通过角色工厂，可以根据角色类型的不同，创建战士、法师或射手等不同的游戏角色实例。
       * 4.日志记录器
       * 在日志记录系统中，可以使用日志工厂来创建不同类型的日志记录器。
       * 根据日志级别或其他条件，工厂可以创建相应的文件记录器、数据库记录器或网络记录器。
       * 5.数据库连接池
       * 在使用数据库时，可以使用工厂模式来管理数据库连接的创建和复用。
       * 通过使用连接池工厂，可以提前创建一定数量的数据库连接，并在需要时分配给请求，避免频繁创建和销毁数据库连接。
       * 
      */
      // 简单工厂 通过工厂类的静态方法来请求创建产品对象,传入相应的参数
      simpleFactory() {
        // 定义抽象产品类
        abstract class Product {
          abstract use(): void;
        }

        // 具体产品类A
        class ConcreteProductA extends Product {
          use() {
            console.log("使用具体产品A");
          }
        }

        // 具体产品类B
        class ConcreteProductB extends Product {
          use() {
            console.log("使用具体产品B");
          }
        }

        // 工厂类
        class Factory {
          // 静态方法，根据传入的参数创建并返回具体产品对象
          static createProduct(type: string): Product {
            switch (type) {
              case "A":
                return new ConcreteProductA();
              case "B":
                return new ConcreteProductB();
              default:
                throw new Error("无效的产品类型");
            }
          }
        }

        // 客户端代码
        const productA = Factory.createProduct("A"); // 创建具体产品A的对象
        productA.use(); // 使用具体产品A

        const productB = Factory.createProduct("B"); // 创建具体产品B的对象
        productB.use(); // 使用具体产品B

      },
      // 工厂方法 通过定义一个用于创建对象的接口,将具体的对象创建延迟到子类中进行
      // 每个具体的子类都可以定义自己的创建对象逻辑,从而实现了解耦和扩展性
      factoryMethod() {
        // 抽象产品类
        interface Product {
          use(): void;
        }

        // 具体产品类A
        class ConcreteProductA implements Product {
          use() {
            console.log("使用具体产品A");
          }
        }

        // 具体产品类B
        class ConcreteProductB implements Product {
          use() {
            console.log("使用具体产品B");
          }
        }

        // 抽象工厂类
        abstract class Factory {
          abstract createProduct(): Product;

          // 其他操作...
        }

        // 具体工厂类A
        class ConcreteFactoryA extends Factory {
          createProduct(): Product {
            return new ConcreteProductA();
          }

          // 其他操作...
        }

        // 具体工厂类B
        class ConcreteFactoryB extends Factory {
          createProduct(): Product {
            return new ConcreteProductB();
          }

          // 其他操作...
        }

        // 客户端代码
        const factoryA: Factory = new ConcreteFactoryA();
        const productA: Product = factoryA.createProduct();
        productA.use(); // 使用具体产品A

        const factoryB: Factory = new ConcreteFactoryB();
        const productB: Product = factoryB.createProduct();
        productB.use(); // 使用具体产品B

      },

      // 抽象工厂:定义了创建一系列相关产品的接口 通常包含了多个抽象的工厂方法
      abstractFactory() {
        // 定义抽象电脑工厂接口
        interface ComputerFactory {
          createCPU(): CPU;
          createRAM(): RAM;
        }

        // 具体品牌工厂 - 戴尔电脑工厂
        class DellComputerFactory implements ComputerFactory {
          createCPU() {
            return new DellCPU();
          }

          createRAM() {
            return new DellRAM();
          }
        }

        // 具体品牌工厂 - 惠普电脑工厂
        class HPComputerFactory implements ComputerFactory {
          createCPU() {
            return new HPCPU();
          }

          createRAM() {
            return new HPRAM();
          }
        }

        // 抽象产品类 - CPU
        class CPU { }

        // 具体产品类 - 戴尔CPU
        class DellCPU extends CPU { }

        // 具体产品类 - 惠普CPU
        class HPCPU extends CPU { }

        // 抽象产品类 - RAM
        class RAM { }

        // 具体产品类 - 戴尔RAM
        class DellRAM extends RAM { }

        // 具体产品类 - 惠普RAM
        class HPRAM extends RAM { }

        // 使用抽象工厂模式创建并使用电脑
        const dellFactory = new DellComputerFactory();
        const hpFactory = new HPComputerFactory();

        const dellCPU = dellFactory.createCPU();
        const dellRAM = dellFactory.createRAM();

        const hpCPU = hpFactory.createCPU();
        const hpRAM = hpFactory.createRAM();

        console.log(dellCPU); // DellCPU {}
        console.log(dellRAM); // DellRAM {}

        console.log(hpCPU); // HPCPU {}
        console.log(hpRAM); // HPRAM {}

      }
    },
    '建造者模式': {
      /**
       * 也叫生成器模式
       * 它可以用于构建复杂[对象]的创建过程，将对象的构建步骤和表示分离，以便能够灵活地构建不同的对象。
       * [可以避免construct构造函数内容过多],不利于扩展 可以把必要参数放在构造函数中,其他的用set来动态设置
       * 顾客走进一家餐馆点餐，我们利用工厂模式，根据用户不同的选择，来制作不同的食物，比如披萨、汉堡、沙拉。
       * 对于披萨来说，用户又有各种配料可以定制，比如奶酪、西红柿、起司，我们通过建造者模式根据用户选择的不同配料来制作披萨。
       * 一种创建型设计模式，它可以用于构建复杂对象的创建过程，将对象的构建步骤和表示分离，以便能够灵活地构建不同的对象。
       * 1.分离构建过程和表示，使得构建过程可复用，易于扩展和修改。
         2.可以细化构建过程中的每个步骤，灵活控制对象的构建。
         3.隐藏了复杂对象的构建细节，简化了客户端代码。
      */
      builder() {
        // 产品类：电脑
        class Computer {
          private processor: string;
          private memory: number;
          private storage: number;
          constructor(
            public processor: string,
            public memory: number,
            public storage: number
          ) { }

          public getSpecs(): void {
            console.log(
              `Processor: ${this.processor} | Memory: ${this.memory}GB | Storage: ${this.storage}GB`
            );
          }
        }

        // 抽象建造者接口
        interface ComputerBuilder {
          setProcessor(processor: string): void;
          setMemory(memory: number): void;
          setStorage(storage: number): void;
          build(): Computer;
        }

        // 具体建造者A
        class GamingComputerBuilder implements ComputerBuilder {
          private computer: Computer;

          constructor() {
            // [key]这里是关键,将构造函数中较多的类抽出来
            // 电脑产品的默认配置为：Intel i7, 16G内存, 512G硬盘
            this.computer = new Computer("Intel i7", 16, 512);
          }
          // 构建处理器类型
          setProcessor(processor: string): void {
            this.computer = new Computer(
              processor,
              this.computer.memory,
              this.computer.storage
            );
          }
          // 构建内存大小
          setMemory(memory: number): void {
            this.computer = new Computer(
              this.computer.processor,
              memory,
              this.computer.storage
            );
          }
          // 构建硬盘大小
          setStorage(storage: number): void {
            this.computer = new Computer(
              this.computer.processor,
              this.computer.memory,
              storage
            );
          }
          // 一个用于获取最终产品的方法
          build(): Computer {
            return this.computer;
          }
        }

        // 具体建造者B
        class OfficeComputerBuilder implements ComputerBuilder {
          private computer: Computer;

          constructor() {
            this.computer = new Computer("Intel i5", 8, 256);
          }

          setProcessor(processor: string): void {
            this.computer = new Computer(
              processor,
              this.computer.memory,
              this.computer.storage
            );
          }

          setMemory(memory: number): void {
            this.computer = new Computer(
              this.computer.processor,
              memory,
              this.computer.storage
            );
          }

          setStorage(storage: number): void {
            this.computer = new Computer(
              this.computer.processor,
              this.computer.memory,
              storage
            );
          }

          build(): Computer {
            return this.computer;
          }
        }

        // 指挥者
        class ComputerDirector {
          private builder: ComputerBuilder;

          constructor(builder: ComputerBuilder) {
            this.builder = builder;
          }

          constructComputer(): Computer {
            this.builder.setProcessor("Intel i7");
            this.builder.setMemory(16);
            this.builder.setStorage(512);
            return this.builder.build();
          }
        }

        // 客户端代码
        const gamingBuilder: ComputerBuilder = new GamingComputerBuilder();
        const officeBuilder: ComputerBuilder = new OfficeComputerBuilder();

        const gamingDirector: ComputerDirector = new ComputerDirector(gamingBuilder);
        const gamingComputer: Computer = gamingDirector.constructComputer();
        gamingComputer.getSpecs(); // 输出：Processor: Intel i7, Memory: 16GB, Storage: 512GB

        const officeDirector: ComputerDirector = new ComputerDirector(officeBuilder);
        const officeComputer: Computer = officeDirector.constructComputer();
        officeComputer.getSpecs(); // 输出：Processor: Intel i5, Memory: 8GB, Storage: 256GB

      }
    },
    '原型模式': {}
  },
  // 主要总结了一些类与对象组合在一起的经典结构,这些经典结构可以解决特定应用场景的问题
  '结构型': {
    '代理模式': {
      /**
       * 定义:在不改变原始类代码的情况下,通过引入代理类来给原始类附加功能
       * 一般代理和主体具有[相同的接口]，这对调用者来说是透明的。
       * 代理将每个操作转发给主体，通过额外的预处理或后处理增强其行为。
       * 例如 vue 延迟初始化 缓存 数据验证 安全检验 日志记录等
       * 代理模式常用在业务系统中开发一些非功能性需求，比如：监控、统计、鉴权、限流、事务、幂等、日志。
       * 我们将这些附加功能与业务功能解耦，放到代理类统一处理，让程序员只需要关注业务方面的开发。
       * 除此之外，代理模式还可以用在 RPC、缓存等应用场景中。
       * ES6中的Proxy
       * 
       * 应用场景:
       * 0.Axios将我们的请求拦截,做一些预处理
       * 1.跨域请求代理: 浏览器中由于同源策略的限制,无法直接从一个域名到另一个域名的请求
       * 可以使用代理模式做中间层,在同源的域名上发起请求,并将请求转发给目标域名 这样就实现了跨域请求的代理
       * 2.缓存代理:在浏览器中,代理对象可以通过缓存服务器响应结果,以减少对真实服务器的请求次数
       * 当客户端发起请求时,代理首先检查是否有缓存的响应结果,没有就发起真实请求,并将响应结果进行缓存
       * 3.图片懒加载:在网页中加载大量图片时，可以使用代理对象来延迟图片的加载。代理对象可以将图片的 src 属性设置为一个占位符或默认图片，
       * 只有当图片进入可视区域时再将真实的图片地址赋值给 src 属性，从而实现图片的懒加载。
       * 4.权限验证:代理对象可以[拦截]用户请求,并检查用户的身份和权限
      */
      fakeProxy() {
        // 被代理对象是target
        function target(data) {
          this.data = data;
        }

        target.name = 'John';
        target.age = 30;
        target.greet = () => { };

        // 拦截策略（功能增强）
        const handler = {
          get(target, property, receiver) {
            console.log(`获取属性 "${property}"`);
            return Reflect.get(target, property, receiver);
          },

          set(target, property, value, receiver) {
            console.log(`设置属性 "${property}" 为 ${value}`);
            return Reflect.set(target, property, value, receiver);
          },

          has(target, property) {
            console.log(`检查属性 "${property}" 是否存在`);
            return Reflect.has(target, property);
          },

          deleteProperty(target, property) {
            console.log(`删除属性 "${property}"`);
            return Reflect.deleteProperty(target, property);
          },

          apply(target, thisArg, argumentsList) {
            console.log('调用函数');
            return Reflect.apply(target, thisArg, argumentsList);
          },

          construct(target, argumentsList, newTarget) {
            console.log('调用构造函数');
            return Reflect.construct(target, argumentsList, newTarget);
          },

          getPrototypeOf(target) {
            console.log('获取原型');
            return Reflect.getPrototypeOf(target);
          },

          setPrototypeOf(target, prototype) {
            console.log('设置原型');
            return Reflect.setPrototypeOf(target, prototype);
          },

          defineProperty(target, property, descriptor) {
            console.log(`定义属性 "${property}"`);
            return Reflect.defineProperty(target, property, descriptor);
          },

          getOwnPropertyDescriptor(target, property) {
            console.log(`获取属性描述符 "${property}"`);
            return Reflect.getOwnPropertyDescriptor(target, property);
          },

          ownKeys(target) {
            console.log('获取自身属性键');
            return Reflect.ownKeys(target);
          },
        };

        // 代理对象是proxy
        const proxy = new Proxy(target, handler);

        // 通过操作代理对象间接操作被代理对象
        console.log(proxy.name); // 获取属性 "name"
        proxy.age = 35; // 设置属性 "age" 为 35
        console.log('name' in proxy); // 检查属性 "name" 是否存在
        delete proxy.age; // 删除属性 "age"
        proxy(); // 调用函数
        const instance = new proxy(); //调用构造函数 获取属性 "prototype"
        console.log(Object.getPrototypeOf(proxy)); // 获取原型
        Object.setPrototypeOf(proxy, {}); // 设置原型
        Object.defineProperty(proxy, 'city', { value: 'New York' }); // 定义属性 "city"
        console.log(Object.getOwnPropertyDescriptor(proxy, 'name')); // 获取属性描述符 "name"
        console.log(Object.getOwnPropertyNames(proxy)); // 获取自身属性键
      }
    },

    '装饰器模式': {
      /**
       * 装饰器模式主要解决继承关系过于复杂的问题，通过组合来替代继承。
       * 它主要的作用是给原始类添加增强功能。这也是判断是否该用装饰器模式的一个重要的依据。
       * 除此之外，装饰器模式还有一个特点，那就是可以对原始类嵌套使用多个装饰器。
       * 为了满足这个应用场景，在设计的时候，装饰器类需要跟原始类继承相同的抽象类或者接口。
      */
      decorator() {
        // ES7 为我们提供了语法糖可以给一个类装上装饰器
        // 装饰器函数，它的第一个参数是目标类
        function Decorator(target) {
          target.control = function () {
            console.log('我是新的逻辑')
          }
          return target
        }


        // 将装饰器“安装” 到HorribleCode上
        @Decorator
        class HorribleCode () {
          //老代码逻辑
        }


        HorribleCode.control()
      }
    },
    '适配器模式': {
      /**
       * 适配兼容 将不兼容的接口装换为可兼容的接口,让原本由于接口不兼容而不能一起工作的类可以一起工作
       * 适配器模式可以看做一种补偿模式,用来补救设计上的缺陷
       * 
       * 1.统一多个类的接口设计
       * 假设我们的系统要对用户输入的文本内容做敏感词过滤，为了提高过滤的召回率，我们引入了多款第三方敏感词过滤系统，
       * 依次对用户输入的内容进行过滤，过滤掉尽可能多的敏感词。但是，每个系统提供的过滤接口都是不同的。
       * 这就意味着我们没法复用一套逻辑来调用各个系统。这个时候，我们就可以使用适配器模式，
       * 将所有系统的接口适配为统一的接口定义，这样我们可以复用调用敏感词过滤的代码。
       * 2.替换依赖的外部系统
       * 当我们把项目中依赖的一个外部系统替换为另一个外部系统的时候，利用适配器模式，可以减少对代码的改动。
       * 3.兼容老版本接口
       * 在做版本升级的时候，对于一些要废弃的接口，我们不直接将其删除，而是暂时保留，并且标注为 deprecated，
       * 并将内部实现逻辑委托为新的接口实现。
       * 4.适配不同格式的数据
       * 适配器模式主要用于接口的适配，实际上，它还可以用在不同格式的数据之间的适配。
       * 5.浏览器兼容性
       * 适配器模式常被用于处理不同浏览器之间的兼容性问题。
       * 通过创建适配器来封装对特定浏览器的特殊处理，使得代码可以在不同浏览器上正常运行。
      */

      adapt() {
        // function identity<T>(arg:T):T{}
        // //  类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
        // let output=identity('out')


        // 目标接口 
        interface Target {
          request(): void;
          [propName: string]: any
        }

        // 适配者类 
        class Adaptee {
          specificRequest(): void {
            console.log("Adaptee's specific request");
          }
        }

        // 适配器类 
        class Adapter implements Target {
          private adaptee: Adaptee;
          constructor(adaptee: Adaptee) {
            this.adaptee = adaptee;
          }

          request(): void {
            console.log("Adapter's request");
            this.adaptee.specificRequest();
          }
        }

        // 客户端代码 
        const adaptee = new Adaptee();
        const adapter = new Adapter(adaptee);
        adapter.request();

      }
    },
    // 完成接口设计，就相当于完成了一半的开发任务。只要接口设计得好，那代码就差不到哪里去。
    '门面模式': {
      /**
       * 门面模式为子系统提供统一的接口,定义一组高层接口让底层更好用
       * 有点类似 最少知识原则,接口隔离原则
       * 假设有一个系统 A，提供了 a、b、c、d 四个接口。系统 B 完成某个业务功能，需要调用 A 系统的 a、b、d 接口。
       * 利用门面模式，我们提供一个包裹 a、b、d 接口调用的门面接口 x，给系统 B 直接使用。
       * 1.解决易用性问题
       * 门面模式可以用来封装系统的底层实现，隐藏系统的复杂性，提供一组更加简单易用、更高层的接口。
       * 2.解决性能问题
       * 我们通过将多个接口调用替换为一个门面接口调用，减少网络通信成本，提高 App 客户端的响应速度
       * 3.解决分布式事务问题
       * 
       * 
      */
    },
    '组合模式(不常用)': {
      /**
       * 组合模式本质就是模块化
       * 将一组对象（员工和部门）组织成树形结构，以表示一种‘部分 - 整体’的层次结构（部门与子部门的嵌套结构）。
       * 组合模式让客户端可以统一单个对象（员工）和组合对象（部门）的处理逻辑（递归遍历）。
       * 
       * 不需要关心处理的是单个对象还是组合对象，常用于树形结构的建模，例如文件系统、图形界面等场景。
       * 应用场景
       * 1.UI组件库
       * UI 组件库通常包含各种复杂的组件，如按钮、表单、卡片等。这些组件可以被看作是一个组合结构，
       * 每个组件可以包含其他组件或嵌套组件。使用组合设计模式，我们可以定义一个通用的组件接口，
       * 并让每个组件实现该接口。这样，在使用组件库时，用户可以方便地处理单个组件和组件的组合。
       * 2.导航菜单
       * 网站或应用程序中的导航菜单通常是一个树形结构，包含多个菜单项和子菜单。
       * 通过使用组合设计模式，我们可以将每个菜单项和子菜单都视为组件，并统一对待它们。
       * 这样，在渲染导航菜单时，我们可以递归地遍历菜单组件，根据其类型进行相应的渲染和交互处理。
       * 3.数据可视化图表
       * 数据可视化图表通常由多个元素组成，如坐标轴、图例、数据点等。通过使用组合设计模式，
       * 我们可以将每个图表元素都视为组件，并按照一定的层次结构组织起来。
       * 这样，在绘制图表时，我们可以递归地遍历图表组件，并根据其类型进行相应的绘制和交互操作。
       * 4.嵌套路由
       * 在前端框架中，如 React、Vue 等，通常会使用嵌套路由来实现页面的层级结构。
       * 每个路由可以包含其他子路由或页面组件。使用组合设计模式，我们可以将每个路由都视为一个组件，并统一对待它们。
       * 这样，在定义和管理路由时，我们可以递归地遍历路由组件，根据其类型进行相应的路由配置和导航处理。
      */
    },
    '享元模式': {
      /**
       * 顾名思义就是被共享的单元 意图是复用对象,节省内存,前提是享元对象不可变
       * 1.DOM
       * DOM 是用于表示和操作 HTML 文档的 API。在 DOM 中，元素节点、属性节点、文本节点等都可以被视为享元对象。
       * 当创建多个相同类型的节点时，可以共享相同的原型和属性，从而减少内存占用。
       * 2.Event Listener
       * 浏览器中的事件监听器也使用了享元模式。
       * 当多个元素绑定相同类型的事件监听器时，可以共享同一个事件处理函数，避免重复创建。
       * 3.CSS 样式
       * 在使用 CSS 样式时，如果多个元素具有相同的样式规则，浏览器可以使用享元模式来共享样式对象，以减少内存占用。
       * 4.字体和图标
       * 浏览器中常见的字体和图标库也可以使用享元模式。
       * 如果多个元素需要使用相同的字体或图标，可以共享相同的资源文件，以提高性能和节省带宽。
       * 5.缓存管理
       * 浏览器通过缓存机制来提高页面加载速度。
       * 当浏览器发现某个资源已经在缓存中存在时，可以直接从缓存中获取，而无需重新下载。
       * 这种缓存机制也可以看作是一种享元模式，通过共享资源来减少网络请求。
       * 6.表单处理 
       * 在表单处理中，如果有多个输入框具有相同的验证规则或事件处理逻辑，
       * 可以使用享元模式来共享验证器或处理函数，以减少代码冗余和内存消耗。
      */
      flyweight() {
        // 创建一个享元工厂函数来管理和提供共享的圆形对象
        const CircleFactory = (function () {
          // 享元池
          const circleCache = {};
          // 内部类
          function Circle(radius) {
            this.radius = radius;
          }

          Circle.prototype.draw = function (color) {
            console.log(
              `Drawing a circle with radius ${this.radius} and color ${color}.`
            );
          };

          return {
            // 当客户端获取对象的时候首先在享元池中寻找是否已经存在；
            // 如果存在就返回缓存的，否则就new一个添加到享元池中并返回
            getCircle: function (radius) {
              if (!circleCache[radius]) {
                circleCache[radius] = new Circle(radius);
              }
              return circleCache[radius];
            },
            // 查看享元池中对象数量
            getTotalCircles: function () {
              return Object.keys(circleCache).length;
            },
          };
        })();

        // 实例化享元工厂
        const factory = new CircleFactory();
        // 使用享元工厂获取对象
        const redCircle = factory.getCircle(5);
        redCircle.draw("red");

        const blueCircle = factory.getCircle(5);
        blueCircle.draw("blue");

        console.log(`Total circles created: ${factory.getTotalCircles()}`);
        /* 输出的结果为：
        >>>
        Drawing a circle with radius 5 and color red.
        Drawing a circle with radius 5 and color blue.
        Total circles created: 1
        */

      }
    },
    '桥接模式(不常用)': {
      /**
       * 用于将抽象部分与其具体实现部分分离,使他们可以独立变化
       * 一个类存在两个（或多个）独立变化的维度，我们通过组合的方式，让这两个（或多个）维度可以独立进行扩展。
       * 原生js中没有直接对此模式的使用，但是在UI库开发，动画，主题，获取数据源的业务场景中用得较多。
      */
    },
  },
  '行为型': {
    '观察者模式': {
      /**
       * 在对象之间建立一对多的依赖关系,当一个对象的状态发生变化时,它的所有依赖对象都会收到通知并自动更新
       * subject 被观察者
       * observer 观察者,订阅者
       * 1. 事件处理
       * 在 JavaScript 和浏览器中，事件机制就是观察者设计模式的实现。
       * DOM 元素可以作为主题，而事件监听函数则充当观察者。
       * 当事件发生时，主题会通知所有注册的观察者执行相应的事件处理函数。
       * 2. AJAX 请求
       * 在使用 XMLHttpRequest 或 Fetch API 发起 AJAX 请求时，我们可以将请求对象作为主题，而回调函数作为观察者。
       * 当请求返回结果时，主题会通知观察者进行相应的处理。
       * 3. 订阅-发布（Pub/Sub）模式
       * 该模式是观察者模式的一种变体，在 JavaScript 中被广泛应用于消息传递和事件系统。
       * 通过订阅和发布机制，多个订阅者可以同时订阅特定的主题，并在主题发生变化时接收通知。
       * 4. 数据绑定和响应式框架
       * 许多前端框架和库，如 Vue.js 和 React.js，使用观察者模式来实现数据绑定和响应式更新。
       * 当数据发生变化时，框架会通知相关的观察者组件，使其自动更新视图。
       * 5. WebSocket 通信
       * WebSocket 是一种双向通信协议，利用观察者模式来实现实时消息推送。
       * 服务器可以作为主题，而客户端则充当观察者。当服务器有新消息时，它会通知所有连接的客户端。
       * 6. Node.js 事件驱动编程
       * Node.js 是基于事件驱动的非阻塞 I/O 模型。它使用观察者模式来处理事件和回调函数。
       * 当特定的事件发生时，Node.js 会通知相应的观察者执行对应的回调函数，以实现异步和并发操作。
       * 7. 第三方库
       * MobX 是一个 JavaScript 库，用于管理状态（state）和处理状态变化。
       * 它使用了观察者模式来跟踪对状态的更改，并使得相关组件能够自动地进行更新。
       * 
      */
      observer() {
        // 主题接口
        interface Subject {
          registerObserver(observer: Observer): void;
          removeObserver(observer: Observer): void;
          notifyObservers(): void;
        }

        // 观察者接口
        interface Observer {
          update(data: any): void;
        }

        // 具体主题类
        class ConcreteSubject implements Subject {
          private observers: Observer[] = [];
          private data: any;

          registerObserver(observer: Observer): void {
            this.observers.push(observer);
          }

          removeObserver(observer: Observer): void {
            const index = this.observers.indexOf(observer);
            if (index !== -1) {
              this.observers.splice(index, 1);
            }
          }

          notifyObservers(): void {
            for (const observer of this.observers) {
              observer.update(this.data);
            }
          }

          setData(data: any): void {
            this.data = data;
            this.notifyObservers();
          }
        }

        // 具体观察者类
        class ConcreteObserver implements Observer {
          private name: string;

          constructor(name: string) {
            this.name = name;
          }

          update(data: any): void {
            console.log(`Observer ${this.name} received data: ${data}`);
          }
        }

        // 客户端代码
        const subject = new ConcreteSubject();

        const observer1 = new ConcreteObserver("Observer 1");
        const observer2 = new ConcreteObserver("Observer 2");

        subject.registerObserver(observer1);
        subject.registerObserver(observer2);

        subject.setData("Hello world!");

      }
    },
    '模板模式': {
      /**
       * 是一种行为型设计模式,它定义了一个算法(代码结构)的骨架,并允许子类在不改变算法(代码结构)的情况下重写算法中的某些步骤
       * 模板模式有两大作用：复用和扩展。
       * 复用指的是，所有的子类可以复用父类中提供的模板方法的代码。
       * 扩展指的是，框架通过模板模式提供功能扩展点，让框架用户可以在不修改框架源码的情况下，基于扩展点定制化框架的功能
       * 
       * 1.JavaScript 中的 Array.prototype.sort() 方法
       * 这个方法使用了模板设计模式来实现排序算法。它定义了一个模板方法 compareFunction，
       * 该方法接受两个参数并返回一个比较结果。具体的排序逻辑由 compareFunction 方法的实现决定，可以根据需要进行自定义。
       * 2.浏览器中的事件处理程序（Event Handlers）
       * 例如，当我们为某个元素绑定点击事件时，可以使用模板设计模式来定义事件处理程序。
       * 在事件处理函数中，可以预先定义一些通用的操作步骤，然后调用具体的事件处理逻辑。
       * 3.JavaScript 中的模块加载器（如 RequireJS、CommonJS）
       * 这些模块加载器使用模板设计模式来定义加载和注入模块的过程。它们提供了一种标准化的模块加载流程，
       * 但允许开发人员在特定的模块中实现自己的逻辑。
       * 4.XMLHttpRequest 对象
       * 在使用 XMLHttpRequest 发送 AJAX 请求时，可以通过使用回调函数来实现模板设计模式。
       * 我们可以定义一个模板方法，在其中指定 AJAX 请求的一般流程和处理逻辑，然后在具体的回调函数中实现特定的业务逻辑。
       * 
      */
      template() {
        class AbstractClass {
          //通用的方法调用
          templateMethod() {
            this.primitiveOperation1();
            this.primitiveOperation2();
          }

          abstract primitiveOperation1(): void;
          abstract primitiveOperation1(): void;
        }

        class ConcreteClassA extends AbstractClass {
          primitiveOperation1() {
            console.log("ConcreteClassA: Step 1");
          }

          primitiveOperation2() {
            console.log("ConcreteClassA: Step 2");
          }
        }

        class ConcreteClassB extends AbstractClass {
          primitiveOperation1() {
            console.log("ConcreteClassB: Step 1");
          }

          primitiveOperation2() {
            console.log("ConcreteClassB: Step 2");
          }
        }

        const classA = new ConcreteClassA();
        classA.templateMethod(); // 输出：ConcreteClassA: Step 1, ConcreteClassA: Step 2

        const classB = new ConcreteClassB();
        classB.templateMethod(); // 输出：ConcreteClassB: Step 1, ConcreteClassB: Step 2
      }
    },
    '策略模式': {
      /**
       * 定义一族算法类,将每个算法分别封装起来,让他们可以互相替换.策略模式可以使算法的变化独立于使用它的客户端
       * 允许在运行时根据不同的算法或策略选择不同的行为
       * 
       * 1.数据格式化：根据不同的数据类型和格式要求，使用不同的格式化策略，如日期格式化、数字格式化、货币格式化等。
       * 2.缓存策略：根据不同的缓存需求，使用不同的缓存策略，如内存缓存、本地存储缓存、服务端缓存等。
       * 3.表单验证：根据不同的表单输入类型和验证规则，使用不同的验证策略，如文本输入、数字输入、邮箱输入等。
       * 4.图片加载策略：根据不同的图片加载需求，使用不同的加载策略，如立即加载、懒加载、按需加载等。
       * 5.文件排序
       * 可以根据文件大小选择不同排序方式 小的用插排,大点的用快排,再大的用外部排序,再大用多线程并发排序
       * 
      */
      strategy() {
        // 定义策略接口
        interface Strategy {
          execute(): void;
        }

        // 具体策略类 - 策略A
        class ConcreteStrategyA implements Strategy {
          execute(): void {
            console.log("Executing strategy A");
          }
        }

        // 具体策略类 - 策略B
        class ConcreteStrategyB implements Strategy {
          execute(): void {
            console.log("Executing strategy B");
          }
        }

        // 上下文类
        class Context {
          private strategy: Strategy;

          // 设置策略
          setStrategy(strategy: Strategy): void {
            this.strategy = strategy;
          }

          // 执行策略
          executeStrategy(): void {
            this.strategy.execute();
          }
        }

        // 使用策略设计模式
        const context = new Context();

        // 使用策略A
        context.setStrategy(new ConcreteStrategyA());
        context.executeStrategy();

        // 使用策略B
        context.setStrategy(new ConcreteStrategyB());
        context.executeStrategy();
      }
    },
    '职责链模式': {
      /**
       * 在职责链模式中，多个处理器（也就是刚刚定义中说的“接收对象”）依次处理同一个请求。
       * 一个请求先经过 A 处理器处理，然后再把请求传递给 B 处理器，B 处理器处理完后再传递给 C 处理器，
       * 以此类推，形成一个链条。链条上的每个处理器各自承担各自的处理职责，所以叫作职责链模式。
       * 
       * 1.事件处理机制
       * 在浏览器中，事件处理机制就是一个典型的责任链模式的应用。
       * 当事件发生时，它会从目标元素开始沿着 DOM 树向上传播，每个元素都有机会处理该事件。
       * 如果某个元素无法处理事件，它会将事件传递给它的父级元素，直到找到能够处理事件的元素或者事件冒泡至根元素。
       * 2.中间件（Middleware）模式
       * 在 Web 开发中，中间件模式也是一种常见的责任链模式的应用。
       * 例如，Express.js 框架中的中间件允许你按照顺序添加不同的中间件函数来处理 HTTP 请求。
       * 请求将依次经过这些中间件函数，每个中间件函数都有可能对请求进行处理、修改或者将请求传递给下一个中间件函数。
       * 3.JavaScript Promise
       * Promise 是 JavaScript 中用于处理异步操作的一种机制。
       * 当使用 Promise 链式调用时，每个 Promise 对象都有一个 then() 方法，可以将回调函数添加到链条中。
       * 当前一个 Promise 对象执行完成后，它会自动将结果传递给下一个 Promise 对象，形成一个责任链式的处理。
       * 4.jQuery Ajax
       * 在 jQuery 的 Ajax 功能中，可以使用 $.ajax() 方法发送异步请求，
       * 并通过 .done()、.fail()、.always() 等方法添加相应的回调函数。
       * 这些回调函数可以按照顺序连接起来，形成一个责任链，每个回调函数都有机会处理请求的结果。
       * 5.过滤器,拦截器
       * 
      */
      chain() {
        // 抽象处理器
        class Handler {
          nextHandler: Handler | null = null;
          setNext(handler: Handler) {
            this.nextHandler = handler;
          }
          abstract handleRequest(request: number): void;
        }

        // 具体处理器1
        class ConcreteHandler1 extends Handler {
          handleRequest(request: number) {
            request <= 10 ? console.log(`Request ${request} handled by ConcreteHandler1`) : this.nextHandler?.handleRequest(request);
          }
        }

        // 具体处理器2
        class ConcreteHandler2 extends Handler {
          handleRequest(request: number) {
            request > 10 && request <= 20 ? console.log(`Request ${request} handled by ConcreteHandler2`) : this.nextHandler?.handleRequest(request);
          }
        }


        // 具体处理器3
        class ConcreteHandler3 extends Handler {
          handleRequest(request) {
            request > 20 && request <= 80 ? console.log(`Request ${request} handled by ConcreteHandler3`) : this.nextHandler?.handleRequest(request);
          }
        }

        // 异常处理器
        class ConcreteHandlerX extends Handler {
          handleRequest(request) {
            throw new Error(`Request ${request} can not be handled by ConcreteHandler chain`);
          }
        }

        // 创建处理对象
        const handler1 = new ConcreteHandler1();
        const handler2 = new ConcreteHandler2();
        const handler3 = new ConcreteHandler3();
        const errorhandler = new ConcreteHandlerX();

        // 处理对象成链
        handler1.setNext(handler2);
        handler2.setNext(handler3);
        handler3.setNext(errorhandler);

        // 客户端发送请求
        handler1.handleRequest(5);   // 输出: Request 5 handled by ConcreteHandler1
        handler2.handleRequest(15);  // 输出: Request 15 handled by ConcreteHandler2
        handler3.handleRequest(25);  // 输出: Request 25 handled by ConcreteHandler3
        handler1.handleRequest(90);  // 直接报错
      }
    },
    '状态模式': {
      /**
       * 核心是对象在其内部状态改变时改变其行为
       * 状态模式将对象的行为封装到不同的状态类中,使对象在不同的状态下可以选择不同的行为
       * 1.订单状态处理
       * 2.游戏角色状态转换
      */
      state() {
        abstract class State {
          constructor(public context: Context | null = null) { }
          // 这里体现出③：用于封装与环境类的特定状态相关的行为
          handle() {
            if (!this.context) {
              console.log("找不到老铁了！");
            } else {
              this.exec();
            }
          }

          next<T extends State>(NextState: new (context: Context) => T) {
            if (!this.context) {
              console.log("找不到老铁了！");
            } else {
              this.context.to(new NextState(this.context));
            }
          }
          abstract exec(): any;
        }

        // 具体状态类
        class StateA extends State {
          // 这里体现出④：用于封装与环境类的特定状态相关的行为
          exec() {
            console.log("买票");
            this.next(StateB);
          }
        }

        class StateB extends State {
          exec() {
            console.log("坐车");
            this.next(StateC);
          }
        }

        class StateC extends State {
          exec() {
            console.log("看球");
            this.next(StateO);
          }
        }

        class StateO extends State {
          exec() {
            throw new Error('已经结束了');
          }
        }

        // 环境类
        class Context {
          // 这里体现出①：环境类维护一个对抽象状态类的引用，即cts
          constructor(public cts: State | null = null) { }
          to(state: State) {
            console.log(`Transitioning to ${state.constructor.name}`);
            this.cts = state;
          }

          do() {
            // 这里体现出②：通过该引用来调用具体状态类的方法
            this.cts?.handle();
          }
        }
        // 使用示例
        const context = new Context();
        const stateA = new StateA(context);
        context.to(stateA);

        while (1) {
          try {
            context.do();
          } catch {
            console.log('肯定输了！');
            break;
          }
        }
      }
    },
    '备忘录模式': {
      /**
       * 快照模式
       * 在不违背封装原则的前提下,捕获一个对象的内部状态,并在该对象之外保存这个状态,以便之后恢复对象为之前的状态
       * 
      */
      snapshot() {
        // 状态
        class State {
          constructor(public data: string) { }
        }

        // 备忘录：用来包装状态实例对象
        class Memento {
          constructor(public state: State | null) { }

          getState() {
            return this.state;
          }
        }

        // 管理者：存储或者取出某个备忘录对象
        class Caretaker {
          mementos: Memento[] = [];
          // 存储
          addMemento(memento: Memento) {
            this.mementos.push(memento);
          }
          // 取出
          getMemento(index: number) {
            return this.mementos[index];
          }
        }

        // 发起人
        class Originator {
          state: State | null = null;
          // 初始化/切换当前状态的方法
          setState(state: State) {
            this.state = state;
          }
          // 根据当前状态生成一个备忘录对象
          createMemento() {
            return new Memento(this.state);
          }
          // 将当前状态恢复到某个快照时刻
          restoreFromMemento(memento: Memento) {
            this.state = memento.getState();
          }
        }

        // 创建发起人对象和管理者对象
        const originator = new Originator();
        const caretaker = new Caretaker();

        // 设置发起人对象的初始状态并包装成备忘录对象然后保存到管理者中
        originator.setState(new State("State 1"));
        caretaker.addMemento(originator.createMemento());

        // 修改发起人对象的状态并将修改状态包装并保存
        originator.setState(new State("State 2"));
        caretaker.addMemento(originator.createMemento());

        // 从管理者中拿出某个备忘录并将其中的状态恢复到发起者
        originator.restoreFromMemento(caretaker.getMemento(0));
        console.log(originator.state); // >>> State {data: 'State 1'}
      }
    },
    '命令模式(特定场景使用)': {
      /**
       * 命令模式将请求（命令）封装为一个对象，这样可以使用不同的请求参数化其他对象（将不同请求依赖注入到其他对象），
       * 并且能够支持请求（命令）的排队执行、记录日志、撤销等（附加控制）功能。
       * 
       * 1.document.execCommand()
       * Document 对象的 execCommand() 方法允许在网页中执行命令式的编辑操作，
       * 如粘贴、剪切、加粗、斜体等。开发者可以调用 execCommand() 方法并传递相应的命令参数来执行这些操作，从而实现富文本编辑功能。
       * 2.setTimeout() 和 setInterval()
       * JavaScript 提供了 setTimeout() 和 setInterval() 函数来实现定时器功能。
       * 开发者可以使用这两个函数将一段代码封装成一个函数对象，并在指定的时间间隔后执行相应的代码，相当于将定时器行为封装成具体的命令对象。
       * 
      */
    },
    '解释器模式(特定场景使用)': {
      /**
       * 一种行为型设计模式，用于定义一个语言的文法，并解释该语言中的表达式。
       * 它将每个文法规则表示为一个类，通过组合这些规则的对象来解释表达式。
       * 
       * 1.解析和执行脚本语言
       * 浏览器通过 JavaScript 解释器来解析和执行 JavaScript 代码。
       * 这个解释器可以被视为实现了解释器设计模式的一部分，它将 JavaScript 代码转换成可执行的指令。
       * 2.正则表达式
       * 在 JavaScript 中，正则表达式是一种强大的工具，它通常用于匹配、搜索和替换文本。
       * 正则表达式可以被看作是一种小型的解释器，它解释并执行特定的模式规则。
       * 3.数据查询和处理语言
       * 在浏览器开发中，我们经常使用像 XPath、CSS 选择器或 jQuery 等工具来查询和操作 DOM 元素。
       * 这些查询语言可以被视为解释器，它们解释和执行特定的查询语句，并返回符合条件的结果集。
       * 4.模板引擎
       * 模板引擎用于生成动态内容，例如在前端开发中根据数据渲染 HTML 模板。
       * 一些模板引擎（如 Handlebars、Mustache 等）可能使用解释器设计模式，将模板语法解释为可执行的代码块。
       * 5.国际化和本地化
       * 在多语言网站开发中，解释器设计模式可以用于处理本地化字符串和格式化，
       * 例如解析日期时间格式、数字格式等。这些解释器可以将特定的本地化规则应用于字符串和数据，以生成适合特定语言环境的文本。
       * 
      */
      interpreter() {
        // 抽象表达式类
        abstract class Expression {
          abstract interpret(context: Context): any;
        }

        class Context {
          constructor(public data: string) { }
        }

        // 终结符表达式类:获取运算第一个数字
        class GetNum1 extends Expression {
          interpret(context: Context) {
            const { data } = context;
            const match = /如果(\d+)/.exec(data);
            const num1 = match[1] - 0;
            return num1;
          }
        }

        // 终结符表达式类:获取运算第二个数字
        class GetNum2 extends Expression {
          interpret(context: Context) {
            const { data } = context;
            const match = /(\d+)等于/.exec(data);
            const num2 = match[1] - 0;
            return num2;
          }
        }

        // 终结符表达式类:获取运算计算结果
        class GetRst extends Expression {
          interpret(context: Context) {
            const { data } = context;
            const match = /等于(\d+)/.exec(data);
            const rst = match[1] - 0;
            return rst;
          }
        }

        // 终结符表达式类:获取收信人
        class GetTarget extends Expression {
          interpret(context: Context) {
            const { data } = context;
            const match = /发信息给(.*?)!/.exec(data);
            const target = match[1];
            return target;
          }
        }

        // 终结符表达式类:获取运算符
        class GetOperator extends Expression {
          interpret(context: Context) {
            const { data } = context;
            const match = /如果\d+(.*?)\d+等于/.exec(data);
            const oper = match[1].trim();
            return oper;
          }
        }

        // 解释器类
        class Interpretor extends Expression {
          constructor(
            public getNum1: GetNum1,
            public getNum2: GetNum2,
            public getRst: GetRst,
            public getOper: GetOperator,
            public getTarget: GetTarget
          ) {
            super();
          }

          interpret(context: Context) {
            const num1 = this.getNum1.interpret(context);
            const num2 = this.getNum2.interpret(context);
            const rst = this.getRst.interpret(context);
            const oper = this.getOper.interpret(context);
            const target = this.getTarget.interpret(context);
            let valid = false;

            switch (oper) {
              case "+":
                valid = Math.abs(num1 + num2 - rst) < 1e-4;
                break;
              case "-":
                valid = Math.abs(num1 - num2 - rst) < 1e-4;
                break;
              case "*":
                valid = Math.abs(num1 * num2 - rst) < 1e-4;
                break;
              case "/":
                valid = Math.abs(num1 / num2 - rst) < 1e-4;
                break;
            }

            if (valid) {
              console.log(`信息正确，将结果${rst}发送给收件人${target}`);
            } else {
              console.log(`信息错误，结果不会发送给收件人${target}`);
            }
            // 返回解释器翻译结果
            return {
              num1,
              num2,
              rst,
              oper,
              target,
            };
          }
        }

        // 使用示例
        // 创建上下文实例对象
        const context1 = new Context("如果10-3等于7，发信息给张三!");
        const context2 = new Context("如果1 *2等于7，发信息给李四!");
        // 创建终结符表达式类
        const getNum1 = new GetNum1();
        const getNum2 = new GetNum2();
        const getRst = new GetRst();
        const getOper = new GetOperator();
        const getTarget = new GetTarget();
        // 创建解释器实例
        const interpretor = new Interpretor(
          getNum1,
          getNum2,
          getRst,
          getOper,
          getTarget
        );
        // 使用解释器实例对象解释上下文对象
        interpretor.interpret(context1);
        interpretor.interpret(context2);
        /*
        >>>
        信息正确，将结果7发送给收件人张三
        信息错误，结果不会发送给收件人李四
        */
      }
    },
    '中介模式(特定场景使用)': {
      /**
       * 中介者模式通过引入一个中介者对象，将对象之间的交互集中管理和控制。
       * 中介模式定义了一个单独的（中介）对象，来封装一组对象之间的交互。
       * 将这组对象之间的交互委派给与中介对象交互，来避免对象之间的直接交互。
       * 
       * 1.事件中心（Event Centralization）
       * 中介者模式可以用于将多个对象的事件处理集中管理。一个中介者对象可以作为事件中心，接收来自多个对象的事件，
       * 并根据需要进行广播或转发。
      */
    },
    '迭代器模式': {
      /***/
    },
    '访问者模式(不常用)': {
      /***/
    },
  }
}
