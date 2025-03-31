public class ex15 {
    public static void main(String[] args) {
        //이중반복문
        //일차반복문 = 일차배열
        //이차반복문 = 이차배열
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.println((i+","+j));
            }
        }
        int[][] nums = {{1, 2}, {3, 4}};
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.println(nums[i][j]);
            }
        }

        //별찍기
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        //출력 예)
        //    *
        //   **
        //  ***
        // ****
        //*****
        int a = 4;
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (j >= a) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
            a--;
        }

        //출력 예)
        //*******
        //*    **
        //*   * *
        //*  *  *
        //* *   *
        //**    *
        //*******
        for (int i = 0; i < 7; i++) {
            for (int j = 0; j < 7; j++) {
                if (i==0 || i==6) {
                    System.out.print("*");
                } else {
                    if (j==0 || j==6) {
                        System.out.print("*");
                    } else if (6-i==j) {
                        System.out.print("*");
                    } else {
                        System.out.print(" ");
                    }
                }
            }
            System.out.println();
        }
    }
}
