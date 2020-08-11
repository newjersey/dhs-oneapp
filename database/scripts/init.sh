#!/bin/bash
set -e

echo ""
echo ""
echo "Creating ONEAPP tablespace and users..."
su oracle -c 'echo -e "CREATE TABLESPACE ONEAPP DATAFILE '\''ONEAPP'\'' SIZE 786432000 REUSE AUTOEXTEND ON NEXT 209715200 MAXSIZE UNLIMITED;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'
su oracle -c 'echo -e "CREATE USER ***REMOVED*** IDENTIFIED BY ***REMOVED*** DEFAULT TABLESPACE ONEAPP;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'
su oracle -c 'echo -e "GRANT ALL PRIVILEGES TO ***REMOVED***;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'

su oracle -c 'echo -e "CREATE TABLESPACE FOODSTAMP DATAFILE '\''FOODSTAMP\'\'' SIZE 786432000 REUSE AUTOEXTEND ON NEXT 209715200 MAXSIZE UNLIMITED;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'
su oracle -c 'echo -e "CREATE USER dhsfoodstamp IDENTIFIED BY dhsfoodstamp DEFAULT TABLESPACE FOODSTAMP;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'
su oracle -c 'echo -e "GRANT ALL PRIVILEGES TO dhsfoodstamp;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'

su oracle -c 'echo -e "CREATE TABLESPACE AQADMIN DATAFILE '\''AQADMIN'\'' SIZE 786432000 REUSE AUTOEXTEND ON NEXT 209715200 MAXSIZE UNLIMITED;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'
su oracle -c 'echo -e "CREATE USER aq_admin IDENTIFIED BY aq_admin DEFAULT TABLESPACE AQADMIN;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'
su oracle -c 'echo -e "GRANT ALL PRIVILEGES TO aq_admin;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'

echo ""
echo ""
echo "Grant permissions to database users..."
su oracle -c 'echo -e "GRANT EXECUTE ON sys.dbms_crypto TO ***REMOVED***;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'
su oracle -c 'echo -e "GRANT EXECUTE ON sys.dbms_aq TO ***REMOVED***;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'
su oracle -c 'echo -e "GRANT EXECUTE ON sys.dbms_aqadm TO ***REMOVED***;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'
su oracle -c 'echo -e "GRANT EXECUTE ON sys.dbms_lock TO ***REMOVED***;" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'

echo ""
echo ""
echo "Create database storage directory..."
su oracle -c 'echo -e "CREATE DIRECTORY PAAD_DATA_DIR AS '\''/paad-data'\'';" | $ORACLE_HOME/bin/sqlplus -S / as sysdba'


echo ""
echo ""
echo "Importing step 1: types..."
unzip /data/oneapp-1-types.zip -d /tmp/db-1-types/ && sqlplus ***REMOVED***/***REMOVED***@//localhost:1521/xe @/tmp/db-1-types/export.sql

echo ""
echo ""
echo "Importing step 2: tables..."
# Express Edition of Oracle does not support deferred segments
unzip /data/oneapp-2-tables.zip -d /tmp/db-2-tables/ && sed -i 's/ SEGMENT CREATION DEFERRED//g' /tmp/db-2-tables/export.sql && sqlplus ***REMOVED***/***REMOVED***@//localhost:1521/xe @/tmp/db-2-tables/export.sql

echo ""
echo ""
echo "Importing step 3: queues..."
unzip /data/oneapp-3-queues.zip -d /tmp/db-3-queues/ && sqlplus ***REMOVED***/***REMOVED***@//localhost:1521/xe @/tmp/db-3-queues/export.sql

echo ""
echo ""
echo "Importing step 4a: sequence and views..."
unzip /data/oneapp-4a.zip -d /tmp/db-4a/ && sqlplus ***REMOVED***/***REMOVED***@//localhost:1521/xe @/tmp/db-4a/export.sql

echo ""
echo ""
echo "Importing step 4b: synonyms..."
unzip /data/oneapp-4b.zip -d /tmp/db-4b/ && sqlplus ***REMOVED***/***REMOVED***@//localhost:1521/xe @/tmp/db-4b/export.sql

echo ""
echo ""
echo "Importing step 5a: oneapp packages..."
unzip /data/oneapp-5a.zip -d /tmp/db-5a/ && sqlplus ***REMOVED***/***REMOVED***@//localhost:1521/xe @/tmp/db-5a/export.sql

echo ""
echo ""
echo "Importing step 5b: app package body..."
unzip /data/oneapp-5b.zip -d /tmp/db-5b/ && sqlplus ***REMOVED***/***REMOVED***@//localhost:1521/xe @/tmp/db-5b/export.sql

echo ""
echo ""
echo "Importing step 5c: functions..."
unzip /data/oneapp-5c.zip -d /tmp/db-5c/ && sqlplus ***REMOVED***/***REMOVED***@//localhost:1521/xe @/tmp/db-5c/export.sql

echo ""
echo ""
echo "Importing step 5d: proceedures..."
unzip /data/oneapp-5d.zip -d /tmp/db-5d/ && sqlplus ***REMOVED***/***REMOVED***@//localhost:1521/xe @/tmp/db-5d/export.sql

echo ""
echo ""
echo "Importing step 6: data..."

echo ""
echo ""
echo "Importing step 7: indexes and constraints..."
unzip /data/oneapp-7.zip -d /tmp/db-7/ && sqlplus ***REMOVED***/***REMOVED***@//localhost:1521/xe @/tmp/db-7/export.sql


echo ""
echo ""
echo "DONE IMPORTING ONEAPP DATABASE! Go forth and develop."