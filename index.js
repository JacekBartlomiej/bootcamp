var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        //var instruction = input.toString().trim();
        switch (input.toString().trim()) {
            case '/exit':
                {
                    process.stderr.write('Quitting app!\n');
                    process.exit();
                }
            case '/node version':
                {
                    var nodeVer = process.versions.node;
                    process.stderr.write(nodeVer);
                    break;
                }
            case '/system language':
                {
                    //w materiałach ze szkolenia jest informacja, że w process.env powinno być zawarte LANG ale je tego nie widzę...
                    var systemLang = JSON.stringify(process.env);
                    process.stderr.write(systemLang);
                    break;
                }
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stdout.write('Wrong instruction!\n');
        }
    }
});