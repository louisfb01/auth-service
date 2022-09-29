FROM jboss/keycloak:11.0.0

USER root
COPY themes/ $JBOSS_HOME/themes/ 

USER jboss