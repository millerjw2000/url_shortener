package com.jmiller.urlshortener.backend;

import java.util.Random;

public class GenerateId {

    public static String generate(Integer length) {

        String id = "";
        Random random = new Random();
        String[] choices = {"1","2","3","4","5","6","7","8","9","0",
                            "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                            "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
        };

        for (int i=0; i < length; i++) {
            id = id + choices[random.nextInt(choices.length)];
        }

        return id;

    }

}
