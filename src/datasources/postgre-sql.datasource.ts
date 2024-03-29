import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'PostgreSQL',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5433,
  user: 'alvaroego',
  password: 'admin123',
  database: 'e_comerce_db'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostgreSqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'PostgreSQL';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.PostgreSQL', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
