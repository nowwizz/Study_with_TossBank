public class ex13 {
    public static void main(String[] args) {
        //조건문 switch 문
        //* 자바스크립트와 거의 유사함
        int a = 10;
        switch(a) {
            case 10:
                System.out.println("10입니다");
                break;
            case 20:
                System.out.println("20입니다");
                break;
            default:
                System.out.println("그 외 경우");
                break;
        }

        //JDK 8(1.8) 주로 대세!
        //JDK 11, 17, 21, 24
        //개발환경과 배포환경이 다르다!
        //  -> 도커(docker): 외부환경변수에 따르지 않는다.
        int month = 3;
        switch (month) {
            case 3, 4, 5: //주의!: Java 14버전부터 가능함
                System.out.println("봄");
                break;
            case 6, 7, 8:
                System.out.println("여름");
                break;
            case 9,10,11:
                System.out.println("가을");
                break;
            case 12, 1, 2:
                System.out.println("겨울");
                break;
        }
    }
}
