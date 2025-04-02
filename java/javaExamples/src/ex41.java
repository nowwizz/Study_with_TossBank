import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.lang.annotation.Annotation;

public class ex41 {
    public static void main(String[] args) throws ClassNotFoundException {
        //Class 클래스: 클래스의 정보를 담고 있는 클래스
        //           : 멤버변수, 멤버함수, 생성자, 어노테이션 정보 등등..
        Class cl = String.class;

        String str = new String();
        Class cl2 = str.getClass();

        Class cl3 = Class.forName("java.lang.String");

        Constructor[] cons = cl3.getConstructors();
        for(Constructor con : cons) {
            System.out.println(con);
        }

        Method[] methods = cl3.getMethods();
        for (Method m : methods) {
            System.out.println(m);
        }

        Annotation[] annotations = cl3.getAnnotations();
        for(Annotation a : annotations) {
            System.out.println(a);
        }

    }
}
