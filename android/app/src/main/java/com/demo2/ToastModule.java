package com.demo2;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class ToastModule extends ReactContextBaseJavaModule {
    public static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    ToastModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }

    @Override
    public Map<String, Object> getConstants(){
        final  Map<String,Object> constants = new HashMap<>();
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        constants.put(DURATION_SHORT_KEY,Toast.LENGTH_SHORT);
        return  constants;
    }

    @ReactMethod
    public void showToast(String message, int duration){
        Toast.makeText(getReactApplicationContext(),message,duration).show();
    }
}
