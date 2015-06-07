For lazy people like me, i used mongodump it's faster:

mongodump -d <our database name> -o <directory_backup>

And to "restore/import" that, i used (from directory_backup/dump/):

mongorestore <our database name>