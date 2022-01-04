Ionic Native wrapper for secure random generator
================================================

Install on your project

``` 
npm install @siva7170/inw-secure-random-generator
```

Import into your module as provider

```
import { SecureRandomGenerator } from '@siva7170/secure-random-generator/ngx';
```

```
 providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ... ,SecureRandomGenerator],
 ```

Include in constructor

```
 constructor(
    private secureRandGenerator:SecureRandomGenerator,
    ...
    ...
    ...
  ) { ... }
  ```

Use in your code

```
// RAND_NUMBER, RAND_ALPHA, RAND_ALPHANUMERIC, RAND_ALPHANUMERICSYMBOL

this.secureRandGenerator.generateSecureRandom(10,'RAND_ALPHANUMERIC').then((res)=>{
      console.log('myRand',res);
},(err)=>{
      console.log('myRand [err]: ',err);
});
```

Don't forget to install plugin,

```
ionic cordova plugin add @siva7170/icp-secure-random-generator
```