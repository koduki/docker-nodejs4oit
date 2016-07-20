README
==============

Build image
-------------

```
docker build -t koduki/nodejs4oit .
```

Run
--------------

```bash
$ docker run -it -p 1080:1080 --name=nodejs4oit -v `pwd`/src:/src koduki/nodejs4oit
```

Bloking/Nonbloking Test
----------------

### Bloking 

```bash
$ docker exec -it nodejs4oit ab -n 10 -c 10 http://localhost:1080/blockio
This is ApacheBench, Version 2.3 <$Revision: 1604373 $>
.
.
Concurrency Level:      10
Time taken for tests:   10.002 seconds 
```

### NonBloking

```bash
koduki@nubula-desk MINGW64 ~
$ docker exec -it nodejs4oit ab -n 10 -c 10 http://localhost:1080/nonblockio
.
.
Concurrency Level:      10
Time taken for tests:   1.008 seconds
```
