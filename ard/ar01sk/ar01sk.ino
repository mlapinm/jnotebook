

const uint8_t PIN_LED=LED_BUILTIN;

void setup() {
  pinMode(PIN_LED, OUTPUT);
  Serial.begin(115200);
  Serial.println();

    char st[] = "123";
    char *p = st;
    for(int i=0;i<sizeof(st);i++){
      char str[20] ={0};
      char c='d';
      strncpy(str,st+i,1);
      strcat(str," - ");
      Serial.print(str);
      Serial.println(int(*(p+i)));
      }
  
}


void loop() {
 digitalWrite(PIN_LED, !digitalRead(PIN_LED));
 delay(500);
 
}
