#define _CRT_SECURE_NO_WARNINGS
#include <stdlib.h>
#include <string>
#include <string.h>

void CA_Encode(const char * strSrc, const char* password, char * out)
{
	std::string src;
	src = strSrc;
	size_t len = strlen(password) - 1;
	size_t index = 0;
	for (size_t i = 0; i < src.size(); i++)
	{
		src[i] = src[i] + password[index];
		if (index < len) {
			index++;
		}
		else {
			index = 0;
		}
	}
	strcpy(out, &src[0]);
}

void CA_Decode(const char * strSrc, const char * password, char * out)
{
	std::string src;
	src = strSrc;
	size_t len = strlen(password) - 1;
	size_t index = 0;
	for (size_t i = 0; i < src.size(); i++)
	{
		src[i] = src[i] - password[index];
		if (index < len) {
			index++;
		}
		else {
			index = 0;
		}
	}
	strcpy(out, &src[0]);
}
