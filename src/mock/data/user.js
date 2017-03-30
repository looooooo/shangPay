/**
 * Created by lukefan on 2017/3/30.
 */
import Mock from 'mockjs';
const LoginUsers = [
    {
        id: 1,
        username: 'admin',
        password: '123456',
        avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=256687741,1966008697&fm=21&gp=0.jpg',
        name: '呜啦啦'
    }
];

const Users = [];

for (let i = 0; i < 86; i++) {
    Users.push(Mock.mock({
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
        sex: Mock.Random.integer(0, 1)
    }));
}

export { LoginUsers, Users };
