import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'halfpen';

export const Collections = {
	USERS: 'users',
	TICKETS: 'tickets',
};

var db = null;

MongoClient.connect(url, {useNewUrlParser:true}, function(err, client){
	if(err != null)
		console.log('[mongo] ' + err.name + ' : ' + err.message);
	else
		db = client.db(dbName);
});

export function collection(name){

	if(db === null)
		throw new Error('[mongo] Not connected.');

	return db.collection(name);

}

