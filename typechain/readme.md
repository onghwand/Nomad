## 시작

```shell
$npm init -y
# "test": "echo \"Error: no test specified\" && exit 1" 삭제
# "main": "index.js" 삭제
$npm install -D typescript
```

- src 폴더 생성
  - index.ts 파일 생성
- `tsconfig.json` 파일 생성 => 타입스크립트로 작업한다는 것을 알려줌

### ts => js 컴파일(build)

> tsconfig.json

```typescript
{
    "include": ["src"], // 컴파일할 ts파일 있는 폴더이름
    "compilerOptions": {
        "outDir": "build", // 컴파일된 js 폴더이름 
        "target": "ES6" // js 버전 기본값 es3
    }
}
```

> package.json

```javascript
{
  "name": "typechain",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^4.7.4"
  }
}
```

> bash

```shell
$ npm run build
# build폴더에 컴파일된 js파일 생겼는지 확인
```

