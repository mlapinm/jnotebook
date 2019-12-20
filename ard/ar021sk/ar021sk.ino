const uint8_t LED_PIN = LED_BUILTIN;
const uint8_t BTN_PIN = 2;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BTN_PIN, INPUT_PULLUP);
  
  Serial.begin(115200);
  Serial.println();

}

void loop() {
  static const uint32_t LED_TIME = 5000;

  static bool lastBtn = false;
  static uint32_t ledDuration = 0;

  bool btn = debounceRead(BTN_PIN, LOW);
  if(btn != lastBtn){
//  Serial.print(lastBtn);
//  Serial.println(btn);
    lastBtn=btn;
    if(btn){
      if(ledDuration){
        digitalWrite(LED_PIN, LOW);
        ledDuration = 0;
      }else{
        digitalWrite(LED_PIN, HIGH);
        ledDuration = millis()+ LED_TIME;
      }
    }  
  }
  if(ledDuration){
    if((int32_t)millis()>(int32_t)ledDuration){
      digitalWrite(LED_PIN, LOW);
      ledDuration = 0;  
    }
  }
}

bool debounceRead(uint8_t pin, bool level){
  static const uint32_t DEBOUNCE_TIME = 20;

  static bool lastBtn = false;
  static uint32_t lastTime;
  static uint32_t tick=0;

  bool btn = digitalRead(pin) == level;
  if(btn != lastBtn){
    lastBtn = btn;
    lastTime = millis();
    tick=0;  
  }else{
    tick++;
    if(millis()-lastTime >= DEBOUNCE_TIME){
      if(btn){Serial.print(millis()-lastTime);Serial.print(" - ");Serial.println(tick);
      }
      return btn;  
    }
  }
  return false;
}
