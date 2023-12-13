# 사용할 베이스 이미지를 지정합니다.
FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

# Nginx 설정 파일을 복사합니다.
COPY nginx.conf /etc/nginx/nginx.conf

# 전체 /public 폴더를 Nginx의 기본 디렉토리로 복사합니다.
COPY build/ /usr/share/nginx/html/

# Nginx를 실행합니다.
CMD ["nginx", "-g", "daemon off;"]
