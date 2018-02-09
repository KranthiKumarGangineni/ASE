package tutorial.cs5551.com.translateandroidapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import org.apache.commons.lang3.StringUtils;

/**
 * Created by Kranthi on 2/7/2018.
 */

public class LoginScreen extends AppCompatActivity{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        Log.d("a","n");
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
    }

    /**
     * Login Validation is done here.
     */
    public void validateLogin(View view) {
        Log.d("Hi..","Hello");

        String username = null;
        String password = null;
        boolean validationFlag = false;

        // Getting username
        EditText userText = findViewById(R.id.username);
        // Getting Password
        EditText passwordText = findViewById(R.id.password);
        // Getting Error Message Text
        TextView textView = findViewById(R.id.errorMessage);

        if (userText != null) {
            // Converting the usertext to String value
            username = userText.getText().toString();
        }

        if(passwordText != null){
            // Converting the passwordText to String value
            password = passwordText.getText().toString();
        }

        // Added JAR commons-lang and using StringUtils to do Blank check
        if(StringUtils.isNotBlank(username) && StringUtils.isNotBlank(password)
                && username.equals("Kranthi") && password.equals("krithika")){
            validationFlag = true;
        }

        // Throw Error if validation is false
        if (!validationFlag) {
            // Setting Visibility from Invisible to Visible If error
            textView.setVisibility(View.VISIBLE);
        }
        else{
            // Redirect the page
            Intent redirect = new Intent(LoginScreen.this, Translation.class);
            startActivity(redirect);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_login, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

}
