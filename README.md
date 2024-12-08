#LInk del apk
[https://www.mediafire.com/file/arq5mi7dcj0g6ij/ITVOTec.apk/file]


# Ejecución de la Aplicación en Android

Sigue estos pasos para configurar y ejecutar la aplicación en un dispositivo Android.

## Requisitos Previos

- Node.js y npm instalados.
- Android SDK instalado en `$HOME/Android/Sdk`.
- ADB (Android Debug Bridge) configurado para reconocer tu dispositivo Android.
- Un dispositivo Android conectado y en modo de depuración USB.

## Instrucciones

### 1. Instalar dependencias

Ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias necesarias:

```bash
npm install
```

### 2. Configurar la variable de entorno ANDROID_SDK_ROOT
Configura la variable de entorno ANDROID_SDK_ROOT para que apunte al directorio donde está instalado el Android SDK. Utiliza el siguiente comando:

```bash
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
```

Para hacer este cambio permanente, añade la línea anterior a tu archivo ~/.bashrc y actualiza tu entorno con:

```bash
echo 'export ANDROID_SDK_ROOT=$HOME/Android/Sdk' >> ~/.bashrc
```
```bash
source ~/.bashrc
```
### 3. Sincronizar el proyecto con Capacitor
Sincroniza el proyecto local con la configuración de Capacitor para asegurarte de que todo esté listo para ejecutarse en un dispositivo Android:

A veces, después de cambios de enrutamiento o condiciones, es necesario ejecutar:

```bash
npm run build
```
```bash
npx cap sync
```
```bash
npx cap sync
```
4. Ejecutar la aplicación en un dispositivo Android
Una vez que la configuración esté completa, ejecuta la aplicación en tu dispositivo con el siguiente comando:

 ``bash
 npx cap run android --target=e2814f12
```
```bash
npx cap run android --target=<ID_DISPOSITIVO>
```
Sustituye <ID_DISPOSITIVO> por el ID de tu dispositivo Android. Puedes verificar los dispositivos conectados con:

```bash
adb devices
```
Opción sin sincronizar cambios automáticamente
Si deseas ejecutar el comando sin sincronizar automáticamente los cambios, utiliza la opción --no-sync:

```bash
npx cap run android --target=<ID_DISPOSITIVO> --no-sync
```
Este comando construirá y desplegará la aplicación en el dispositivo especificado.

@¡IMPORTANTE
Abrir primero en Android Studio:
No ejecutes directamente npx cap run android sin haber sincronizado previamente el proyecto en Android Studio con npx cap open android. Esto asegura que los archivos de Gradle y las configuraciones estén sincronizados correctamente.

Errores comunes:
Si encuentras problemas relacionados con el Android SDK o ADB, verifica que:

La variable ANDROID_SDK_ROOT está configurada correctamente.
Tu dispositivo está en modo de depuración USB.
![image](https://github.com/user-attachments/assets/b39f3fee-432d-4abd-8061-8cb27f86b755)
![WhatsApp Image 2024-12-08 at 2 56 09 PM (1)](https://github.com/user-attachments/assets/1b667017-83a6-4cf5-b567-884d67fd77c0)
![WhatsApp Image 2024-12-08 at 2 56 09 PM](https://github.com/user-attachments/assets/6923ec9c-940f-4bd9-8da7-2a9659dd2ebd)


