from celery import shared_task


@shared_task
def main():
    return 'hello world'