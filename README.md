# auto-deployment-with-laravel-6.0
laravel 6.0 auto deployment boilerplate

**Host Ayarları**
Aşağıdaki parametrelerin belirtilen dosya içerisine yazılması gerekmektedir. Aksi takdirde hiç bir linke erişilemez.
    
    C://Windows/System32/Drivers/etc/host
    
    127.0.0.1 app.local
    127.0.0.1 management.local
    127.0.0.1 api.local
    127.0.0.1 storage.local

Laravel projelerinin çalışması için aşağıdaki dizinlerde

    /frontend/src
    /management/src

Sırası ile şu komutlar çalıştırılmalı

    composer install
    php artisan key:generate





