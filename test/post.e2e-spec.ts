import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const { VERSION } = process.env;
const BASE_URL = `/api/${VERSION}/users`;
const mock = {
  name: '홍길동 title ....',
  content: 'conetnt ....',
  writer: 14,
  addr: '서울',
};

// e2e, crud 따로 구현 => yarn e2e
describe.only('Post (e2e)', () => {
  describe('PostController - CRUD', () => {
    it('/create-post validate (POST)', () => {
      return reqPost
        .send(mock)
        .expect(HttpStatus.OK)
        .expect((res: request.Response) => {
          console.log(res);
        });
    });

    //   it('/get-user (GET)', () => {
    //     return req
    //       .get(`${BASE_URL}/${user.id}`)
    //       .expect(HttpStatus.OK)
    //       .expect((res: request.Response) => {
    //         expect(res.body).toStrictEqual(user);
    //       });
    //   });
    //   it('/get-users (GET)', () => {
    //     return req
    //       .get(BASE_URL)
    //       .expect(HttpStatus.OK)
    //       .expect((res: request.Response) => {
    //         const users = <User[]>res.body;
    //         expect(users.map((user) => user.id)).toContain(user.id);
    //       });
    //   });
    //   it('/update-user (PATCH)', () => {
    //     return req
    //       .patch(`${BASE_URL}/${user.id}`)
    //       .set('accepted', 'application/json')
    //       .send();
    //   });
    // });

    // ============================== 변경 =================================
    let app: INestApplication;
    let req: request.SuperTest<request.Test>;
    let reqPost: request.Test;

    beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

      app = moduleFixture.createNestApplication();
      app.useGlobalPipes(
        new ValidationPipe({
          whitelist: true,
          transform: true,
        }),
      );
      await app.init();
      req = request(app.getHttpServer());
      reqPost = req.post(BASE_URL).set('accepted', 'application/json');
    });

    afterEach(async () => {
      app.close();
    });
  });
});
