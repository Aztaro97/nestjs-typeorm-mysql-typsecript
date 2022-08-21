import { User } from 'src/utils/typeorm/entities/User';
import { DataSource } from 'typeorm';

export const databaseProviders = [
	{
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			const dataSource = new DataSource({
				type: 'mysql',
				host: 'localhost',
				port: 3306,
				username: 'root',
				password: 'root',
				database: 'test',
				entities: [User],
				synchronize: true,
			});

			return dataSource.initialize();
		},
	},
];